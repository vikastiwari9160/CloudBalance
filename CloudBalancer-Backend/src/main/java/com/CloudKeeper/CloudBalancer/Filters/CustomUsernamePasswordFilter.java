//package com.CloudKeeper.CloudBalancer.Filters;
//
//import com.CloudKeeper.CloudBalancer.Utils.JwtUtils;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import tools.jackson.databind.ObjectMapper;
//
//import java.io.IOException;
//import java.util.Map;
//
//
//public class CustomUsernamePasswordFilter extends UsernamePasswordAuthenticationFilter {
//
//    private JwtUtils jwt;
//
//    public CustomUsernamePasswordFilter(AuthenticationManager authmanager, JwtUtils jwt){
//        setAuthenticationManager(authmanager);
//        this.jwt=jwt;
//    }
//
//    @Override
//    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res) {
//        try{
//            Map<String,String> requestBody = new ObjectMapper().readValue(req.getInputStream(),Map.class);
//
//            String username = requestBody.get("username");
//            String password = requestBody.get("password");
//
//            System.out.println("User Name is:"+ username);
//            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username,password);
//
//            return getAuthenticationManager().authenticate(token);
//        }catch(IOException e){
//            throw new RuntimeException(e);
//        }
//    }
//
//    @Override
//    protected void successfulAuthentication(
//            HttpServletRequest request,
//            HttpServletResponse response,
//            FilterChain chain,
//            Authentication authResult) throws IOException {
//
//        SecurityContextHolder.getContext().setAuthentication(authResult);
//
//        UserDetails user = (UserDetails) authResult.getPrincipal();
//        String token = jwt.generateToken(user.getUsername(),
//                user.getAuthorities()
//                .stream()
//                .map(GrantedAuthority::getAuthority)
//                .toList().get(0));
//        response.setStatus(200);
//        response.setContentType("application/json");
//        response.setCharacterEncoding("UTF-8");
//        response.getWriter().write("{\"token\": \"" + token + "\"}");
//
//    }
//
//    @Override
//    protected void unsuccessfulAuthentication(
//            HttpServletRequest request,
//            HttpServletResponse response,
//            AuthenticationException failed) throws IOException {
//
//
//        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//        response.setContentType("application/json");
//        response.getWriter().write("""
//        {
//            "error": "Invalid username or password"
//        }
//        """);
//    }
//
//
//
//}
