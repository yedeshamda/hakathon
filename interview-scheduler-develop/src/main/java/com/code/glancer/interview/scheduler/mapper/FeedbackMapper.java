package com.code.glancer.interview.scheduler.mapper;

import com.code.glancer.interview.scheduler.domain.feedback;
import com.code.glancer.interview.scheduler.dto.FeedbackDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FeedbackMapper {

    public FeedbackDto tofeedbackDto(feedback feedback) {
        return FeedbackDto.builder()
                .id(feedback.getId())
                .Note(feedback.getNote())
                .description(feedback.getDescription())
                .ProposerEvenement(feedback.getEvenement())
                .dateTime(feedback.getDateTime())
                .build();
    }

//    public feedback tofeedback(feedbackDto feedbackDto) {
//        feedback feedback = new feedback();
//        feedback.setIdParticipants(
//                feedbackDto.getIdParticipants()
//                        .stream()
//                        .filter(s -> s.matches("\\d+")) // Filter out non-numeric values
//                        .map(Integer::parseInt)
//                        .collect(Collectors.toList())
//        );
//        feedback.setDateTime(feedbackDto.getDateTime());
//        feedback.setMeetingLink(feedbackDto.getMeetingLink());
//        feedback.setfeedbackStatus(feedbackDto.getfeedbackStatus());
//        return feedback;
//    }

    public feedback tofeedback(FeedbackDto feedbackDto) {
        feedback feedback = new feedback();

        // Pas besoin de conversion si les éléments sont déjà des entiers
        feedback.setNote(feedbackDto.getNote());
        feedback.setDescription(feedbackDto.getDescription());

        feedback.setDateTime(feedbackDto.getDateTime());
        feedback.setEvenement(feedbackDto.getProposerEvenement());

        return feedback;
    }


    public List<FeedbackDto> toDtos(List<feedback> feedbacks) {
        if (feedbacks == null) {
            return new ArrayList<>();
        }
        return feedbacks.stream().map(this::tofeedbackDto).collect(Collectors.toList());
    }
}
