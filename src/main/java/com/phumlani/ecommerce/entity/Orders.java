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
    @Column(name = "id")
    private Long orderId;
    @Column(name = "order_number")
    private UUID orderNumber;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId; //foreign key
    @Column(name = "order_created_date")
    private LocalDateTime orderCreatedDate;
    @Column(name = "status")
    private Status status;
    @Column(name = "total_price")
    private double totalPrice;
//    private Address shippingAddress; // need to have a boolean attribute in  address entity to determine if address is for shipping or not.
    @Column(name = "payment_status")
    private PaymentStatus paymentStatus;

}
