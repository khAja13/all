package com.adobe.aem.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import javax.annotation.PostConstruct;

import javax.inject.Inject;
import java.util.*;

@Model( adaptables = Resource.class )
public class MultiFieldModel  {
    // private static final Logger LOG = LoggerFactory.getLogger(MultiFieldModel.class);

    @SlingObject
    Resource componentResource;

    @Inject
    private String heading;

    @Inject
    private String description;

    @Inject
    private Boolean linkVisible;

    public String getHeading() {
        return heading;
    }

    public String getDescription() {
        return description;
    }

    public Boolean getLinkVisible() {
        return linkVisible;
    }

    public List<Map<String, String>> getButtonDetailsWithMap() {
        List<Map<String, String>> mapOfListOfButtons = new ArrayList<>();
        try {
            Resource buttonDetails = componentResource.getChild("count");
            if(buttonDetails!=null){
                for (Resource button : buttonDetails.getChildren()) {
                    Map<String,String> buttonMap = new HashMap<>();
                    buttonMap.put("buttonText", button.getValueMap().get("buttonText",String.class));
                    buttonMap.put("theme", button.getValueMap().get("theme",String.class));
                    mapOfListOfButtons.add(buttonMap);
                }
            }
        }catch (Exception e){
        }
        return mapOfListOfButtons;
    }
}