package com.code.glancer.interview.scheduler.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "feedback")
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Column(nullable = false)
    private int note;

    private LocalDateTime dateTime;

    @NotNull
    @Column(nullable = false)
    private String description;

    private String Evenement;
}
