package com.crio.starter.repository;

import java.util.List;

import com.crio.starter.data.JobEntity;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface JobsRepository extends MongoRepository<JobEntity, String> {
    
    @Query(value = "{location:?0, jobTitle:?1}")
    public List<JobEntity> getJobs(String location, String searchTerm);
}
