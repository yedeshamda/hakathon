package com.code.glancer.interview.scheduler.controller;

import com.code.glancer.interview.scheduler.domain.MatchingSystem;
import com.code.glancer.interview.scheduler.service.MatchService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Matching")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class MatchinsystemController {
    @Autowired
    private MatchService matchService;

    @GetMapping("MatchingSystems")
    public HttpEntity<List<MatchingSystem>> getInterview() {
        List<MatchingSystem> matchingSystems = matchService.getMatch();
        return new ResponseEntity<>(matchingSystems, HttpStatus.OK);
    }
}
