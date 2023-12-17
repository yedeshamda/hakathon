package com.code.glancer.interview.scheduler.controller;

import com.code.glancer.interview.scheduler.dto.FeedbackDto;
import com.code.glancer.interview.scheduler.service.feedbackService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/feedbackB2B")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class feedController {

    @Autowired
    private feedbackService feedbackService;

    @PostMapping
    public HttpEntity<FeedbackDto> scheduleInterview(@RequestBody FeedbackDto feedbackDto) throws GeneralSecurityException, IOException {
        feedbackDto = feedbackService.scheduleInterview(feedbackDto);
        return new ResponseEntity<>(feedbackDto, HttpStatus.CREATED);
    }

    @GetMapping("genererlien")
    public HttpEntity<String> genererlien() {
        String interviews = feedbackService.genererLienMeet();
        return new ResponseEntity<>(interviews, HttpStatus.OK);
    }

    @PutMapping("etat")
    public void etat1() throws Exception {
        Void etat1 = feedbackService.etat();
    }
}
