package com.crio.starter.controller;

import com.crio.starter.exchange.RecruiterRequestDto;
import com.crio.starter.service.JobService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "*")
public class RecruiterController {

    @Autowired
    private JobService jobService;

    @CrossOrigin(origins = "*")
    @PostMapping("/jobs")
    public ResponseEntity<String> RecruiterRequest(@RequestBody RecruiterRequestDto recruiterRequestDto) {
        System.out.println(recruiterRequestDto);
        boolean result = jobService.createJob(recruiterRequestDto);
        if (result) {
            // return 200 response
            return ResponseEntity.ok().body("Job Creation Successed!");
        }
        // return standard error response
        return ResponseEntity.badRequest().body("Error while processing request");
    }
}
