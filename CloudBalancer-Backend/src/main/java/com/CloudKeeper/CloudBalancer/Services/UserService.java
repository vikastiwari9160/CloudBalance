package com.CloudKeeper.CloudBalancer.Services;

import com.CloudKeeper.CloudBalancer.Config.SecurityConfig;
import com.CloudKeeper.CloudBalancer.DTO.UserDTO;
import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import com.CloudKeeper.CloudBalancer.Repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public UserDTO createUser(UserDTO user){
         user.setPassword(encoder.encode(user.getPassword()));
         String creator = (String)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
         UserEntity newUser= new UserEntity(
                 user.getFirstName(),
                 user.getLastName(),
                 user.getEmail(),
                 user.getPassword(),
                 user.getRole(),
                 creator
         );
         userRepository.save(newUser);
         return user;
    }

    public UserDTO updateUser(UserDTO user) {
        UserEntity currUser = userRepository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        currUser.setFirstName(user.getFirstName());
        currUser.setLastName(user.getLastName());
        currUser.setEmail(user.getEmail());
        currUser.setRole(user.getRole());
        UserEntity updatedUser = userRepository.save(currUser);
        return user;
    }


    public UserDTO getUserById(Long Id){
        Optional<UserEntity> userOption = userRepository.findById(Id);
        if(userOption.isPresent()){
            UserDTO userResponse = new UserDTO();
            UserEntity user = userOption.get();
            userResponse.setFirstName(user.getFirstName());
            userResponse.setLastName(user.getLastName());
            userResponse.setEmail(user.getEmail());
            userResponse.setRole(user.getRole());
            return userResponse;
        }
        throw new EntityNotFoundException("User not found with id: " + Id);
    }

}
