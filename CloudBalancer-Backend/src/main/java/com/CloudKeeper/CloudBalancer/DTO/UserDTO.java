package com.CloudKeeper.CloudBalancer.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.jspecify.annotations.Nullable;

@Data
public class UserDTO {

    private Long Id;

    private String firstName;

    private String lastName;

    private String email;

    private transient String password;

    private String role;

    private boolean active = true;

}
