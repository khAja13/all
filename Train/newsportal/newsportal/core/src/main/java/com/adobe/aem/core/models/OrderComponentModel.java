package com.adobe.aem.core.models;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = SlingHttpServletRequest.class)
public class OrderComponentModel {
    static final Logger log = LoggerFactory.getLogger(OrderComponentModel.class);

    @Inject
    private String name;

    @Inject
    private String mobile;
    
    @Inject
    private String email;

    @Inject
    private String address;

    @Inject
    private String card;

    @Inject
    private String expiry;

    @Inject
    private String cvv;

    public String getName() {
        return name;
    }

    public String getMobile() {
        return mobile;
    }

    public String getEmail() {
        return email;
    }

    public String getAddress() {
        return address;
    }

    public String getCard() {
        return card;
    }

    public String getExpiry() {
        return expiry;
    }

    public String getCvv() {
        return cvv;
    }

    @PostConstruct
    protected void init() {
        // log.info("\r\n====================START OF THE LOGGING=========================");
        // log.info(String.valueOf(Resource.class));
        // log.info(String.valueOf(SlingHttpServletRequest.class));
        // log.info(name);
        // log.info("====================END OF THE LOGGING=========================");
    }


}