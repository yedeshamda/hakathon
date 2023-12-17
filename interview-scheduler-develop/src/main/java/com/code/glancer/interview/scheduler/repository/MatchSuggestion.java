package com.code.glancer.interview.scheduler.repository;

import com.code.glancer.interview.scheduler.domain.MatchingSystem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MatchSuggestion extends JpaRepository<MatchingSystem, Long> {
    @Query(value = "SELECT * FROM companiessuggestions ORDER BY RAND() LIMIT :limit", nativeQuery = true)
    List<MatchingSystem> findRandomMatches(@Param("limit") int limit);

}
