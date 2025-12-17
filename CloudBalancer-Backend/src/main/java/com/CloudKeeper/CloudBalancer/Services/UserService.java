package com.CloudKeeper.CloudBalancer.Services;

import com.CloudKeeper.CloudBalancer.DTO.UserDTO;
import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import com.CloudKeeper.CloudBalancer.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final ModelMapper modelMapper;

    private final UserRepository userRepository;

    private PasswordEncoder encoder;

    public UserService(ModelMapper modelMapper, UserRepository userRepository, PasswordEncoder encoder){
        this.modelMapper = modelMapper;
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    public List<UserDTO> getAllUsers(){
        return  userRepository.findAll().stream().map(
                (UserEntity user)-> modelMapper.map(user, UserDTO.class)
        ).toList();
    }

    public UserEntity createUser(UserDTO user){
         user.setPassword(encoder.encode(user.getPassword()));
         return userRepository.save(
                modelMapper.map(user,UserEntity.class)
        );
    }
}
