package com.adobe.aem.core.models;

import javax.inject.Inject;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;

@Model(adaptables = SlingHttpServletRequest.class)
public class CardComponentModel {
    @Inject
    private String label;

    @Inject
    private String heading;
    
    @Inject
    private String description;

    public String getLabel() {
        return label; 
    }

    public String getHeading() {
        return heading;
    }
    
    public String getDescription() {
        return description;
    }
}