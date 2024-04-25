package com.phumlani.ecommerce.entity;

import com.phumlani.ecommerce.enums.PaymentStatus;
import com.phumlani.ecommerce.enums.Status;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "orders")
@Data
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    private UUID orderNumber;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId; //foreign key
    private LocalDateTime orderCreatedDate;
    private Status status;
    private double totalPrice;
//    private Address shippingAddress; // need to have a boolean attribute in  address entity to determine if address is for shipping or not.
    private PaymentStatus paymentStatus;

}
