package com.code.glancer.interview.scheduler.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackDto {

    private Long id;
    private int Note;
    private String description;
    private String ProposerEvenement;

    private LocalDateTime dateTime;

}
