package com.CloudKeeper.CloudBalancer.Config;

import com.CloudKeeper.CloudBalancer.Filters.CustomUsernamePasswordFilter;
import com.CloudKeeper.CloudBalancer.Services.CustomUserDetailsService;
import com.CloudKeeper.CloudBalancer.Utils.JwtUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private JwtUtils jwt;

    private CustomUserDetailsService userDetailsService;

    public SecurityConfig(CustomUserDetailsService userDetailsService, JwtUtils jwt){
        this.userDetailsService=userDetailsService;
        this.jwt = jwt;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, CustomUsernamePasswordFilter customFilter){
         http
             .csrf(csrf-> csrf.disable())
             .authorizeHttpRequests(
        auth -> {
                    auth.requestMatchers("/login").permitAll();
                    auth.anyRequest().authenticated();
//                    auth.anyRequest().permitAll();
                }
             )
             .addFilterBefore(customFilter,
                     UsernamePasswordAuthenticationFilter.class);
         return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CustomUsernamePasswordFilter customUsernamePasswordFilter(AuthenticationManager authManager){
        CustomUsernamePasswordFilter filter = new CustomUsernamePasswordFilter(authManager,jwt);
        filter.setFilterProcessesUrl("/login");
        return filter;
    }


}
