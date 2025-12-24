package com.CloudKeeper.CloudBalancer.Controller;

import com.CloudKeeper.CloudBalancer.DTO.AccountDTO;
import com.CloudKeeper.CloudBalancer.Entity.AccountEntity;
import com.CloudKeeper.CloudBalancer.Services.AccountsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/api/accounts")
public class AccountsController {

    private AccountsService accountsService;

    public AccountsController(AccountsService accountsService){
        this.accountsService = accountsService;
    }

    @GetMapping
    public ResponseEntity<List<AccountDTO>> getAllAccount(){
        return new ResponseEntity<>(accountsService.getAllAccounts(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AccountDTO> createAccount(AccountDTO accountData){
        return new ResponseEntity<>(accountsService.createAccount(accountData),HttpStatus.CREATED);
    }

}
