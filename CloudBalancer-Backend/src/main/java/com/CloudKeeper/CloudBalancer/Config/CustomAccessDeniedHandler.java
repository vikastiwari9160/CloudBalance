package com.CloudKeeper.CloudBalancer.Config;

import com.CloudKeeper.CloudBalancer.DTO.ErrorResponse;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.time.Instant;

@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.setContentType("application/json");

        ErrorResponse errorResponse = new ErrorResponse(
                "Access Denied: You do not have permission to access this resource.",
                "UNAUTHORIZED",
                Instant.now().toString()
        );

        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(response.getWriter(),errorResponse);
    }
}
