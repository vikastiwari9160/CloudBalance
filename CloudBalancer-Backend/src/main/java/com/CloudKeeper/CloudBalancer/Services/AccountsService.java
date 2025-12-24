package com.CloudKeeper.CloudBalancer.Services;

import com.CloudKeeper.CloudBalancer.DTO.AccountDTO;
import com.CloudKeeper.CloudBalancer.Entity.AccountEntity;
import com.CloudKeeper.CloudBalancer.Repository.AccountsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountsService {

    private AccountsRepository accountsRepository;

    private ModelMapper modelMapper;

    public AccountsService(AccountsRepository accountsRepository, ModelMapper modelMapper){
        this.accountsRepository=accountsRepository;
        this.modelMapper=modelMapper;
    }

    public List<AccountDTO> getAllAccounts(){
        List<AccountEntity> accounts = accountsRepository.findAll();
        List<AccountDTO> result =accounts
                                    .stream()
                                    .map(a-> modelMapper.map(a,AccountDTO.class))
                                    .toList();
        return result;
    }

    public AccountDTO createAccount(AccountDTO accountData){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        accountData.setCreatedBy(((UserDetails)authentication.getPrincipal()).getUsername());
        AccountEntity newAccount= accountsRepository.save(modelMapper.map(accountData,AccountEntity.class));
        return modelMapper.map(newAccount,AccountDTO.class);
    }

}
