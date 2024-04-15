package com.adobe.aem.core.models;

import javax.inject.Inject;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;

@Model(adaptables = SlingHttpServletRequest.class)
public class HeroComponentModel {
    @Inject
    private String category;

    @Inject
    private String title;
    
    @Inject
    private String description;

    public String getCategory() {
        return category;
    }

    public String getTitle() {
        return title;
    }
    
    public String getDescription() {
        return description;
    }
}