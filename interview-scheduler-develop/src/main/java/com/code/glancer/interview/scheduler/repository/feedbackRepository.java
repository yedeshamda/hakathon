package com.code.glancer.interview.scheduler.repository;

import com.code.glancer.interview.scheduler.domain.feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface feedbackRepository extends JpaRepository<feedback, Long> {

}
