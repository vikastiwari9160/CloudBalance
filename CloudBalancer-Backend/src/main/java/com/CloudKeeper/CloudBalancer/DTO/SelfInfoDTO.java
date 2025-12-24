package com.CloudKeeper.CloudBalancer.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class SelfInfoDTO {

    public SelfInfoDTO(Long id, String firstName, String lastName, String email, String role, boolean active, List<AccountDTO> accounts) {
        Id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.active = active;
        this.accounts = accounts;
    }

    private Long Id;

    private String firstName;

    private String lastName;

    private String email;

    private String role;

    private boolean active;

    private List<AccountDTO> accounts;
}
