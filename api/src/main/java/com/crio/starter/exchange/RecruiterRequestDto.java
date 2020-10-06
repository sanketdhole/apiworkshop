package com.crio.starter.exchange;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;;

import lombok.Data;

@Data
public class RecruiterRequestDto {
    @JsonProperty("companyName")
    private String companyName;
    @JsonProperty("jobTitle")
    private String jobTitle;
    @JsonProperty("description")
    private String description;
    @JsonProperty("skills")
    private List<String> skills;
    @JsonProperty("location")
    private String location;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate expiryDate;

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public RecruiterRequestDto(String companyName, String jobTitle, List<String> skills, String location) {
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.skills = skills;
        this.location = location;
    }

    @Override
    public String toString() {
        return "RecruiterRequestDto [companyName=" + companyName + ", jobTitle=" + jobTitle + ", location=" + location
                + ", skills=" + skills + "]";
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = LocalDate.parse(expiryDate);
    }
}
