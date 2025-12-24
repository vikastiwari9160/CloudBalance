package com.CloudKeeper.CloudBalancer.Controller;

import com.CloudKeeper.CloudBalancer.DTO.UserDTO;
import com.CloudKeeper.CloudBalancer.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-management")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO user){
        System.out.println("In req");
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUser(){
        return new ResponseEntity<>(userService.getAllUsers(),HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO user){
        return new ResponseEntity<>(userService.updateUser(user),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id){
        return new ResponseEntity<>(userService.getUserById(id),HttpStatus.OK);
    }


}
