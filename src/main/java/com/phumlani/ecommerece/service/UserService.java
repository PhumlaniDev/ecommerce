package com.phumlani.ecommerce.service;

import com.phumlani.ecommerce.entity.User;
import com.phumlani.ecommerce.exceptions.UserNotFound;
import com.phumlani.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository repository;

    public Optional<User> findUserById(Long userId) throws UserNotFound {
        Optional<User> existingUser = repository.findById(userId);
        if (existingUser.isPresent()){
            return repository.findById(userId);
        } else {
            throw new UserNotFound("User not found");
        }
    }
}
