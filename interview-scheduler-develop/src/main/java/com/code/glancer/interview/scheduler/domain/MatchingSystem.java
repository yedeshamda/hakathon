package com.code.glancer.interview.scheduler.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "companiessuggestions")
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class MatchingSystem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Column(nullable = false)
    private String nom_entreprise;

    @NotNull
    @Column(nullable = false)
    private String type_de_besoin;

    @NotNull
    @Column(nullable = false)
    private String ville_entreprise;
}
