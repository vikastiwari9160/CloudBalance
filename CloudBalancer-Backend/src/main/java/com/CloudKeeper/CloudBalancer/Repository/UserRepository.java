package com.CloudKeeper.CloudBalancer.Repository;

import com.CloudKeeper.CloudBalancer.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByEmail(String Email);

}
