package com.crio.starter.controller;

import java.util.List;

import com.crio.starter.data.JobEntity;
import com.crio.starter.exchange.UserResponseDto;
import com.crio.starter.service.JobService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private JobService jobService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/jobs/{location}/{allSearchTerm}")
    public UserResponseDto getJobs(@PathVariable String location, @PathVariable String allSearchTerm) {
        String[] searchTerms = allSearchTerm.split(",");
        return new UserResponseDto(jobService.getJobs(location, searchTerms));
    }
}