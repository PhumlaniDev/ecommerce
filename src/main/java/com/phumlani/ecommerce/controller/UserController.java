package com.phumlani.ecommerce.controller;

import com.phumlani.ecommerce.entity.User;
import com.phumlani.ecommerce.exceptions.UserNotFound;
import com.phumlani.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/{userId}")
    public ResponseEntity<Optional<User>> findUserById(@PathVariable Long userId) throws UserNotFound {
        return new ResponseEntity<>(service.findUserById(userId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        service.createUser(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}
