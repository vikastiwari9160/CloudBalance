package com.CloudKeeper.CloudBalancer.Config;

import com.CloudKeeper.CloudBalancer.Filters.DebugFilter;
import com.CloudKeeper.CloudBalancer.Filters.JwtAuthFilter;
import com.CloudKeeper.CloudBalancer.Services.CustomUserDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import org.springframework.security.web.access.intercept.AuthorizationFilter;

import java.util.List;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {

    private CustomUserDetailsService userDetailsService;
    private JwtAuthFilter JwtFilter;
    private CustomAuthenticationEntryPoint authenticationEntryPoint;
    private CustomAccessDeniedHandler accessDeniedHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) {
        http
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(request -> {
                CorsConfiguration config = new CorsConfiguration();
                config.setAllowedOriginPatterns(List.of("*"));
                config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                config.setAllowedHeaders(List.of("*"));
                config.setAllowCredentials(true);
                return config;
            }))
            .exceptionHandling(
                    handler -> {
                        handler.authenticationEntryPoint(authenticationEntryPoint);
                        handler.accessDeniedHandler(accessDeniedHandler);
                    }
            )
            .addFilterBefore(JwtFilter,
                    UsernamePasswordAuthenticationFilter.class)
//            .addFilterAfter(debugFilter, AuthorizationFilter.class)
            .authorizeHttpRequests(
                    auth -> {
                        auth.requestMatchers(HttpMethod.POST, "/api/auth/login").permitAll();
                        auth.requestMatchers(HttpMethod.GET,"/api/user-management/**").hasAnyAuthority("ADMIN","READONLY");
                        auth.requestMatchers("/api/user-management/**").hasAuthority("ADMIN");
                        auth.requestMatchers("/api/onboarding").hasAuthority("ADMIN");
                        auth.anyRequest().authenticated();
                    }
            );
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
