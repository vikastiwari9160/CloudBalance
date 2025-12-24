package com.CloudKeeper.CloudBalancer.Services;

import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import com.CloudKeeper.CloudBalancer.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    public UserEntity loadUserByUsername(String username){
        UserEntity user = userRepository.findByEmail(username).orElseThrow(()->new UsernameNotFoundException("User not found :"+ username));
        return user;
    }

}
