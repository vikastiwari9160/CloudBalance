package com.CloudKeeper.CloudBalancer.DTO;

import lombok.Data;
import org.jspecify.annotations.Nullable;

@Data
public class UserDTO {
    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String role;

    private boolean active = true;

}
