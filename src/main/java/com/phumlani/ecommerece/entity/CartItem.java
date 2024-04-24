package com.phumlani.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cart_items")
@Data
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartItemsId;
    private Cart cartId; //foreign key
    private Product productId; //foreign key
    private Integer quantity;
    private Integer price;
}
