package com.phumlani.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "address")
@Data
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;
    private String streetAddress;
    private String city;
    private String province;
    private String zipCode;
    private String country;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId; // foreign key
}
