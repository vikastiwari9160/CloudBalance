package com.CloudKeeper.CloudBalancer.Config;

import com.CloudKeeper.CloudBalancer.DTO.ErrorResponse;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;


import java.io.IOException;
import java.time.Instant;

@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setContentType("application/json");

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        ErrorResponse errorResponse = new ErrorResponse("Access Denied: You need to log in.","UNAUTHORIZED", Instant.now().toString());

        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(response.getWriter(),errorResponse);
    }
}
