package com.CloudKeeper.CloudBalancer.Services;

import com.CloudKeeper.CloudBalancer.DTO.AccountDTO;
import com.CloudKeeper.CloudBalancer.DTO.LoginRequestDTO;
import com.CloudKeeper.CloudBalancer.DTO.SelfInfoDTO;
import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import com.CloudKeeper.CloudBalancer.Repository.UserRepository;
import com.CloudKeeper.CloudBalancer.Utils.JwtUtils;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthService {

    @Value("${jwt.auth-expiration}")
    private Long authExpiry;

    @Value("${jwt.refresh-expiration}")
    private Long refreshExpiry;

    private final AuthenticationManager authmanager;
    private final JwtUtils jwt;
    private final UserRepository userRepository;


    public Map<String, String> Login(LoginRequestDTO loginData){
        System.out.println("Login Process Start!!");

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginData.getUsername(), loginData.getPassword());
        Authentication authResult = authmanager.authenticate(token);

        if(authResult.isAuthenticated()){
            SecurityContextHolder.getContext().setAuthentication(authResult);
            UserEntity user = (UserEntity) authResult.getPrincipal();
            if(user!=null){
                String role =user.getRole();
                String authToken = jwt.generateToken(user.getUsername(),role,authExpiry);
                String refreshToken = jwt.generateToken(user.getUsername(),role,refreshExpiry);
                Map<String,String> tokens = new HashMap<String, String>();
                tokens.put("authToken", authToken);
                tokens.put("refreshToken",refreshToken);
                return tokens;
            }
        }
        return null;
    }

    public SelfInfoDTO selfInfo(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserEntity userData = userRepository.findByEmail((String)(auth.getPrincipal())).orElseThrow(()-> new UsernameNotFoundException("User don't exist"));
        userData.getAccounts();
        System.out.println(Arrays.toString(userData.getAccounts().toArray()));
        return new SelfInfoDTO(
                userData.getId(),
                userData.getFirstName(),
                userData.getLastLogin(),
                userData.getEmail(),
                userData.getRole(),
                userData.isActive(),
                userData.getAccounts().stream().map(accountEntity -> {
                    AccountDTO account = new AccountDTO();
                    account.setAccountId(accountEntity.getAccountId());
                    account.setAccountName(accountEntity.getAccountName());
                    return account;
                }).toList()
        );
    }


}

