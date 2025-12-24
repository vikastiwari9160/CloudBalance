package com.CloudKeeper.CloudBalancer.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class LoginRequestDTO {
    private String username;
    private String password;
}
