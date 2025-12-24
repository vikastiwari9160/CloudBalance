package com.CloudKeeper.CloudBalancer.DTO;

import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
public class AccountDTO {

    private Long id;

    @Column(nullable = false, length = 12)
    private Long accountId;

    @Column(nullable = false)
    private String arn;

    @Column(nullable = false)
    private String accountName;

    private String createdBy;

    private List<UserEntity> users;
}
