package com.adobe.aem.core.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

class Comment implements Serializable {
    @JsonProperty("name")
    private String name;

    @JsonProperty("time")
    private String time;

    @JsonProperty("message")
    private String message;

    @JsonProperty("likes")
    private String likes;

    @JsonProperty("dislikes")
    private String dislikes;

    public String getName() {
        return name;
    }

    public String getTime() {
        return time;
    }

    public String getMessage() {
        return message;
    }

    public String getLikes() {
        return likes;
    }

    public String getDislikes() {
        return dislikes;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setLikes(String likes) {
        this.likes = likes;
    }

    public void setDislikes(String dislikes) {
        this.dislikes = dislikes;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "name='" + name + '\'' +
                ", time='" + time + '\'' +
                ", message='" + message + '\'' +
                ", likes='" + likes + '\'' +
                ", dislikes='" + dislikes + '\'' +
                '}';
    }
}