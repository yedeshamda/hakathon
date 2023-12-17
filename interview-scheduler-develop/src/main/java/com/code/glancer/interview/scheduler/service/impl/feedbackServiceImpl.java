package com.code.glancer.interview.scheduler.service.impl;

import biweekly.property.Organizer;
import com.code.glancer.interview.scheduler.domain.feedback;
import com.code.glancer.interview.scheduler.dto.CalenderDto;
import com.code.glancer.interview.scheduler.dto.EmailDto;
import com.code.glancer.interview.scheduler.dto.FeedbackDto;
import com.code.glancer.interview.scheduler.mapper.FeedbackMapper;
import com.code.glancer.interview.scheduler.repository.feedbackRepository;
import com.code.glancer.interview.scheduler.service.EmailService;
import com.code.glancer.interview.scheduler.service.feedbackService;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class feedbackServiceImpl implements feedbackService {

    @Autowired
    private feedbackRepository feedbackRepository;
    @Autowired
    private FeedbackMapper feedbackMapper;
    @Autowired
    private EmailService emailService;
    private static final String APPLICATION_NAME = "feedbackB2B";
    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");


    @Override
    public FeedbackDto scheduleInterview(FeedbackDto feedbackDto) throws GeneralSecurityException, IOException {
        feedback feedback = feedbackMapper.tofeedback(feedbackDto);
        feedbackRepository.save(feedback);
        EmailDto emailDto = composeEmail(feedbackDto);
        System.out.println(emailDto);
        CalenderDto calenderDto = composeCalender(feedback);
      //  emailService.sendEmail(emailDto);
        try {
            emailService.sendCalenderInvite(calenderDto);
        } catch (GoogleJsonResponseException e) {
            handleGoogleJsonResponseException(e);
        } catch (IOException | MessagingException e) {
            handleOtherExceptions(e);
        }
        feedbackDto = feedbackMapper.tofeedbackDto(feedback);
        return feedbackDto;
    }

    private void handleGoogleJsonResponseException(GoogleJsonResponseException e) {
        e.printStackTrace();  // Handle or log the exception as needed
        // You can add more specific handling for GoogleJsonResponseException if required
    }

    private void handleOtherExceptions(Exception e) {
        e.printStackTrace();  // Handle or log the exception as needed
        // You can add more specific handling for other exceptions if required
    }
    @Override
    public String genererLienMeet() {
        // Générer dynamiquement le lien Meet ici
        // Construire l'URL de la réunion
        String lienMeet = "https://meet.google.com/new?hs";

        return lienMeet;
    }
    private CalenderDto composeCalender(feedback feedback) throws IOException, GeneralSecurityException {

        // Ajoutez cette vérification pour vous assurer que la date de début est supérieure à la date actuelle
        LocalDateTime now = LocalDateTime.now();
        if (feedback.getDateTime().isBefore(now)) {
            throw new IllegalArgumentException("La date de début de l'événement doit être postérieure à la date actuelle");
        }

     //   DateTime startDateTime = new DateTime(String.valueOf(feedback.getDateTime()));
        FeedbackDto feedbackDto = feedbackMapper.tofeedbackDto(feedback);
        CalenderDto calenderDto = null;

//         Créez votre objet CalenderDto
        return CalenderDto.builder()
                .subject(String.format("%s "+feedback.getDescription(), "Hamda Yedes"))
                .description(feedback.getDescription())
               // .meetingLink(feedback.getMeetingLink())
                .meetingLink(feedback.getEvenement())
                .summary(feedback.getDescription())
                .eventDateTime(feedback.getDateTime())
                .organizer(new Organizer("Ider", "Hamda.yedes@gmail.com"))
             //   .attendees(getAttendees(feedback))
                .email(getToEmails(feedbackDto))
               // .attendees(calenderDto.getAttendees())
                .build();
    }


    @Override
    public Void etat() {
        EmailDto emailDto = etat1();
        System.out.println(emailDto);
        emailService.sendEmail(emailDto);
        return null;
    }
    private EmailDto composeEmail(FeedbackDto feedback) {
        return EmailDto.builder()
               // .from(feedback.getScheduler().getEmail())
                .from("hamda.yedes@gmail.com")
                .message(String.format( feedback.getDescription()+" %s ", feedback.getDateTime()))
                .subject(feedback.getDescription())
                .toList(getToEmails(feedback))
                .build();
    }

    private EmailDto etat1() {
        return EmailDto.builder()
                // .from(feedback.getScheduler().getEmail())
                .from("hamda.yedes@gmail.com")
                .message(String.format( "L'employe Hamda aujourd'hui est nerveu"))
                .subject("Etat Employe")
                .toList(getToEmails2())
                .build();
    }

    private List<String> getToEmails(FeedbackDto feedback) {
        List<String> emails = new ArrayList<>();


        emails.add("Hamda.yedes@esprit.tn");
        emails.add("Karim.mohsen@esprit.tn");
        emails.add("Hamda.yedes@gmail.com");

        return emails;
    }
    private List<String> getToEmails1(FeedbackDto feedback) {
        List<String> emails = new ArrayList<>();

        emails.add("Hamda.yedes@gmail.com");
        return emails;
    }
    private List<String> getToEmails2() {
        List<String> emails = new ArrayList<>();

        emails.add("Hamda.yedes@gmail.com");
        return emails;
    }


}
