package com.code.glancer.interview.scheduler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class InterviewSchedulerApplication {

    public static void main(String[] args) {
        SpringApplication.run(InterviewSchedulerApplication.class, args);
    }
}
