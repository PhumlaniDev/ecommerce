package com.phumlani.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "address")
@Data
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long addressId;
    @Column(name = "street_address")
    private String streetAddress;
    @Column(name = "city")
    private String city;
    @Column(name = "province")
    private String province;
    @Column(name = "zip_code")
    private String zipCode;
    @Column(name = "country")
    private String country;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId; // foreign key
}
