package com.CloudKeeper.CloudBalancer.Filters;

import com.CloudKeeper.CloudBalancer.Utils.JwtUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwt;

    @Override
    public void doFilterInternal(HttpServletRequest request,
                                 HttpServletResponse response,
                                 FilterChain filterChain) {
        try {
            String authHeader = request.getHeader("Authorization");

            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                String token = authHeader.substring(7);
                if (jwt.validateToken(token)) {
                    String username = jwt.extractUsername(token);
                    String role = jwt.extractRole(token);
                    UsernamePasswordAuthenticationToken authenticated =
                            new UsernamePasswordAuthenticationToken(username, "", AuthorityUtils.createAuthorityList(role));
                    SecurityContextHolder.getContext().setAuthentication(authenticated);
                }
            }
            filterChain.doFilter(request, response);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
