package com.CloudKeeper.CloudBalancer.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @PostMapping
    public ResponseEntity<> login(@RequestBody String username, @RequestBody String password){
        System.out.println("The user is logedIn");
        return "User LogedIn";
    }

}
