package com.crio.starter.exchange;

import java.util.ArrayList;
import java.util.List;

import com.crio.starter.data.JobEntity;

import lombok.Data;

@Data
public class UserResponseDto {
    private List<JobEntity> jobs = new ArrayList<>();

    public UserResponseDto(List<JobEntity> jobs) {
        this.jobs = jobs;
    }

    public List<JobEntity> getJobs() {
        return jobs;
    }

    public void setJobs(List<JobEntity> jobs) {
        this.jobs = jobs;
    }
}