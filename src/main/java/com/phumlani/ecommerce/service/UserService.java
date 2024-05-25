package com.phumlani.ecommerce.service;

import com.phumlani.ecommerce.entity.Address;
import com.phumlani.ecommerce.entity.User;
import com.phumlani.ecommerce.exceptions.UserNotFound;
import com.phumlani.ecommerce.repository.AddressRepository;
import com.phumlani.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private final UserRepository userRepository;
    private final AddressRepository addressRepository;

    public Optional<User> findUserById(Long userId) throws UserNotFound {
        Optional<User> existingUser = userRepository.findById(userId);
        if (existingUser.isPresent()){
            return userRepository.findById(userId);
        } else {
            throw new UserNotFound("User not found");
        }
    }

    public void createUser(User user){
        Optional<User> existingUser = userRepository.findUserByEmail(user.getEmail());

        if(existingUser.isPresent()){
            throw new RuntimeException("User already exists");
        }

        Address address = user.getAddressId();
        if (address != null && address.getAddressId() == null) {
            address = addressRepository.save(address);
            user.setAddressId(address); // Set the saved address back to the user
        }
        userRepository.save(user);
    }

//    I have a develop branch and main branch, I would like to have a workflow that will trigger the build, test when I push the code to develop branch
}
