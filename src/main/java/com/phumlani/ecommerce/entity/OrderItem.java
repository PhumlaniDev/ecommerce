package com.phumlani.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "order_item")
@Data
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long orderItemId;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Orders oderId; // foreign key
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product productId; // foreign key
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "price")
    private double price;


}
