package com.adobe.aem.core.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

class Product implements Serializable {
    @JsonProperty("id")
    private String id;

    @JsonProperty("image")
    private String image;

    @JsonProperty("title")
    private String title;

    @JsonProperty("description")
    private String description;

    @JsonProperty("about")
    private String about;

    @JsonProperty("price")
    private String price;

    @JsonProperty("images")
    private String[] images;

    @JsonProperty("comments")
    private List<Comment> comments;

    public String getImage() {
        return image;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getId() {
        return id;
    }

    public String getAbout() {
        return about;
    }

    public String getPrice() {
        return price;
    }

    public String[] getImages() { return images; }

    public List<Comment> getComments() {
        return comments;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id='" + id + '\'' +
                ", image='" + image + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", about='" + about + '\'' +
                ", price='" + price + '\'' +
                ", images=" + Arrays.toString(images) +
                ", comments=" + comments +
                '}';
    }
}