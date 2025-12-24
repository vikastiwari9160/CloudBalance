package com.CloudKeeper.CloudBalancer.Repository;

import com.CloudKeeper.CloudBalancer.Entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountsRepository extends JpaRepository<AccountEntity,Long> {

}
