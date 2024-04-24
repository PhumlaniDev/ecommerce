package com.phumlani.ecommerce.entity;

import com.phumlani.ecommerce.enums.Category;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "product")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private String name;
    private String description;
    private String price;
    private Integer quantity;
    private Category category;
    private String imageURL;
}
