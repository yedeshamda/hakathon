package com.code.glancer.interview.scheduler.dto;

import biweekly.property.Attendee;
import biweekly.property.Organizer;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Transient;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder(toBuilder = true)
public class CalenderDto {
    private String subject;
    private String description;
    private String summary;
    private Organizer organizer;
    private String meetingLink;
    private LocalDateTime eventDateTime;
    private List<Attendee> attendees;
    private List<String> email;


    @Transient
    public List<Attendee> getAttendees() {
        List<Attendee> attendees = new ArrayList<>();

        attendees.add(new Attendee("Hamda", "hamda.yedes@esprit.tn"));
        attendees.add(new Attendee("Karim", "karim.mohsen@esprit.tn"));
        attendees.add(new Attendee("HamdaYedes", "hamda.yedes@gmail.com"));

        return attendees;
    }
}
