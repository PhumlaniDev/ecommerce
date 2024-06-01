package com.phumlani.ecommerce.service.user;

import com.phumlani.ecommerce.entity.Address;
import com.phumlani.ecommerce.entity.User;
import com.phumlani.ecommerce.exceptions.UserAlreadyExist;
import com.phumlani.ecommerce.repository.AddressRepository;
import com.phumlani.ecommerce.repository.UserRepository;
import com.phumlani.ecommerce.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private AddressRepository addressRepository;

    @InjectMocks
    private UserService userService; // Replace with the actual class name that has createUser method

    private User user;

    @BeforeEach
    void setUp() {
        Address address = new Address();
        address.setAddressId(null); // Simulate a new address without an ID

        user = new User();
        user.setEmail("test@example.com");
        user.setAddressId(address);
    }

    @Test
    void testCreateUser_UserAlreadyExists() {
        when(userRepository.findUserByEmail(user.getEmail())).thenReturn(Optional.of(user));

        assertThrows(UserAlreadyExist.class, () -> userService.createUser(user));

        verify(userRepository, times(1)).findUserByEmail(user.getEmail());
        verify(userRepository, never()).save(any(User.class));
        verify(addressRepository, never()).save(any(Address.class));
    }

    @Test
    void testCreateUser_NewAddressAndUser() throws UserAlreadyExist {
        when(userRepository.findUserByEmail(user.getEmail())).thenReturn(Optional.empty());
        when(addressRepository.save(any(Address.class))).thenAnswer(invocation -> {
            Address savedAddress = invocation.getArgument(0);
            savedAddress.setAddressId(1L); // Simulate saving address and assigning an ID
            return savedAddress;
        });
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> invocation.getArgument(0));

        userService.createUser(user);

        verify(userRepository, times(1)).findUserByEmail(user.getEmail());
        verify(addressRepository, times(1)).save(any(Address.class));
        verify(userRepository, times(1)).save(user);
    }

    @Test
    void testCreateUser_ExistingAddressAndNewUser() throws UserAlreadyExist {
        Address existingAddress = new Address();
        existingAddress.setAddressId(1L); // Simulate an existing address with an ID
        user.setAddressId(existingAddress);

        when(userRepository.findUserByEmail(user.getEmail())).thenReturn(Optional.empty());
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> invocation.getArgument(0));

        userService.createUser(user);

        verify(userRepository, times(1)).findUserByEmail(user.getEmail());
        verify(addressRepository, never()).save(any(Address.class));
        verify(userRepository, times(1)).save(user);
    }
}
