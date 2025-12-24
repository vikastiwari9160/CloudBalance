package com.CloudKeeper.CloudBalancer.Utils;

import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import com.CloudKeeper.CloudBalancer.Services.CustomUserDetailsService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtUtils {

    @Value("${jwt.secret}")
    private String secret;

    private final CustomUserDetailsService userDetailsService;


    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateToken(String username, String role, Long expiration) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role",role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    public String extractRole(String token){
        return getClaims(token).get("role",String.class);
    }

    public Date extractExpireTime(String token){
        return getClaims(token).getExpiration();
    }

    public boolean validateToken(String token) {
        String username = extractUsername(token);
        UserEntity user = userDetailsService.loadUserByUsername(username);
        return extractUsername(token).equals(user.getEmail()) &&
                extractRole(token).equals(user.getRole()) &&
                !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return getClaims(token).getExpiration().before(new Date());
    }

    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
