package com.CloudKeeper.CloudBalancer.Controller;

import com.CloudKeeper.CloudBalancer.DTO.LoginRequestDTO;
import com.CloudKeeper.CloudBalancer.DTO.SelfInfoDTO;
import com.CloudKeeper.CloudBalancer.Services.AuthService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginData){
        Map<String,String> tokens = authService.Login(loginData);
        if(tokens==null){
            return new ResponseEntity<>("token not generated!!",HttpStatus.BAD_REQUEST);
        }
        ResponseCookie authCookie = ResponseCookie.from("authToken",tokens.get("authToken"))
                .httpOnly(true)
                .path("/")
                .sameSite("Lax")
                .build();
        ResponseCookie refreshCookie = ResponseCookie.from("refreshToken",tokens.get("refreshToken"))
                .httpOnly(true)
                .path("/")
                .sameSite("Lax")
                .build();
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.SET_COOKIE, authCookie.toString());
        headers.add(HttpHeaders.SET_COOKIE,refreshCookie.toString());
        return new ResponseEntity<>("token generated!!", headers, HttpStatus.OK);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(){

        return new ResponseEntity<>("",HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(){
        ResponseCookie authCookie = ResponseCookie.from("authToken","")
                .httpOnly(true)
                .path("/")
                .sameSite("Lax")
                .maxAge(0)
                .build();
        ResponseCookie refreshCookie = ResponseCookie.from("refreshToken","")
                .httpOnly(true)
                .path("/")
                .sameSite("Lax")
                .maxAge(0)
                .build();
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.SET_COOKIE,authCookie.toString());
        headers.add(HttpHeaders.SET_COOKIE,refreshCookie.toString());
        return new ResponseEntity<>("",headers,HttpStatus.OK);
    }


    @GetMapping("/me")
    public ResponseEntity<SelfInfoDTO> selfInfo(){
        SelfInfoDTO info = authService.selfInfo();
        return new ResponseEntity<>(authService.selfInfo(),HttpStatus.OK);
    }


}
