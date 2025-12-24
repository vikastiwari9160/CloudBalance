package com.CloudKeeper.CloudBalancer.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="accounts")
public class AccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 12)
    private Long accountId;

    @Column(nullable = false)
    private String arn;

    @Column(nullable = false)
    private String accountName;

    @Column(nullable = false)
    private String CreatedBy;

    @CreationTimestamp
    @Column(updatable = false)
    private String createdOn;

    @ManyToMany(mappedBy = "accounts", fetch = FetchType.LAZY)
    private List<UserEntity> users;

}
