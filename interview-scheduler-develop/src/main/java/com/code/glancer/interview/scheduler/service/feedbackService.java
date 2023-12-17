package com.code.glancer.interview.scheduler.service;

import com.code.glancer.interview.scheduler.dto.FeedbackDto;

import java.io.IOException;
import java.security.GeneralSecurityException;

public interface feedbackService {

    FeedbackDto scheduleInterview(FeedbackDto feedbackDto) throws GeneralSecurityException, IOException;

    String genererLienMeet();


    Void etat() ;


}
