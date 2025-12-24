package com.CloudKeeper.CloudBalancer.Filters;

import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import com.CloudKeeper.CloudBalancer.Services.CustomUserDetailsService;
import com.CloudKeeper.CloudBalancer.Utils.JwtUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    @Value("${jwt.auth-expiration}")
    private Long authExpiry;

    @Value("${jwt.refresh-expiration}")
    private Long refreshExpiry;

    private final JwtUtils jwt;

    private final CustomUserDetailsService userDetailsService;

    @Override
    public void doFilterInternal(HttpServletRequest request,
                                 HttpServletResponse response,
                                 FilterChain filterChain)  throws IOException, ServletException{
        if (request.getRequestURI().equals("/api/auth/login")) {
            filterChain.doFilter(request, response);
            return;
        }
        Cookie[] cookies = request.getCookies();

        boolean authenticatedFlag = false;

        String authToken = null;
        String refreshToken = null;

        if(cookies!=null && cookies.length>0){
            for(Cookie cookie :cookies) {
                if (cookie.getName().equals("authToken")) {
                    authToken = cookie.getValue();
                } else if (cookie.getName().equals("refreshToken")) {
                    refreshToken = cookie.getValue();
                }
            }
            if(authToken!=null){
                try{
                    if (jwt.validateToken(authToken)) {
                        String username = jwt.extractUsername(authToken);
                        String role = jwt.extractRole(authToken);
                        UsernamePasswordAuthenticationToken authenticated =
                                new UsernamePasswordAuthenticationToken(username, "", AuthorityUtils.createAuthorityList(role));
                        SecurityContextHolder.getContext().setAuthentication(authenticated);
                        authenticatedFlag = true;
                    }
                }catch (Exception e){
                    System.out.println(e);
                }
            }
            if(!authenticatedFlag && refreshToken!=null) {
                if (jwt.validateToken(refreshToken)){
                    String username = jwt.extractUsername(refreshToken);
                    UserEntity user = userDetailsService.loadUserByUsername(username);

                    authToken = jwt.generateToken(user.getUsername(),user.getRole(),authExpiry);
                    refreshToken = jwt.generateToken(user.getUsername(),user.getRole(),refreshExpiry);

                    ResponseCookie authCookie = ResponseCookie.from("authToken",authToken)
                            .httpOnly(true)
                            .path("/")
                            .sameSite("Lax")
                            .build();
                    ResponseCookie refreshCookie = ResponseCookie.from("refreshToken",refreshToken)
                            .httpOnly(true)
                            .path("/")
                            .sameSite("Lax")
                            .build();

                    response.addHeader(HttpHeaders.SET_COOKIE,authCookie.toString());
                    response.addHeader(HttpHeaders.SET_COOKIE,refreshCookie.toString());

                    response.setStatus(HttpServletResponse.SC_OK);

                }
            }
        }
        filterChain.doFilter(request, response);
    }

}
