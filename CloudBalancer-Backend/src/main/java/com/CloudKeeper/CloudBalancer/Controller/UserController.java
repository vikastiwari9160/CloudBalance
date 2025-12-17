package com.CloudKeeper.CloudBalancer.Controller;

import com.CloudKeeper.CloudBalancer.DTO.UserDTO;
import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import com.CloudKeeper.CloudBalancer.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-management")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserEntity> addUser(@RequestBody UserDTO user){
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUser(){
        return new ResponseEntity<>(userService.getAllUsers(),HttpStatus.OK);
    }

}
