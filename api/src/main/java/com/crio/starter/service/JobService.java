package com.crio.starter.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.crio.starter.data.JobEntity;
import com.crio.starter.exchange.RecruiterRequestDto;
import com.crio.starter.repository.JobsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class JobService {

    @Autowired
    private JobsRepository jobsRepository;

    public List<JobEntity> getJobs(String location, String[] searchTerms) {
        List<JobEntity> allJobs = new ArrayList<>();
        for(String searchTerm : searchTerms) {
            allJobs.addAll(jobsRepository.getJobs(location, searchTerm));
        }
        Collections.sort(allJobs, new Comparator<JobEntity>(){
            public int compare(JobEntity j1, JobEntity j2) {
                return j2.getExpiryDate().compareTo(j1.getExpiryDate());
            }
        });
        return allJobs;
    }

    public boolean createJob(RecruiterRequestDto recruiterRequestDto) {
        JobEntity jobEntity = new JobEntity();
        jobEntity.setCompanyName(recruiterRequestDto.getCompanyName());
        jobEntity.setJobTitle(recruiterRequestDto.getJobTitle());
        jobEntity.setJobDescription(recruiterRequestDto.getDescription());
        jobEntity.setSkills(recruiterRequestDto.getSkills());
        jobEntity.setLocation(recruiterRequestDto.getLocation());
        jobEntity.setExpiryDate(recruiterRequestDto.getExpiryDate());
        jobsRepository.save(jobEntity);
        return true;
    }
}
