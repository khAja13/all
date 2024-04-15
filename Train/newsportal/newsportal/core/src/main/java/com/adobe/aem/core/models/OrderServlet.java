package com.adobe.aem.core.models;

import com.adobe.aem.core.models.ProductsModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletPaths;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;

@Component(
    service = Servlet.class,
    property = {
        "sling.servlet.methods=POST",
        "sling.servlet.paths=/order" // Define your servlet path
    }
)
// @Component(service=Servlet.class)
// @SlingServletPaths(value =   "/order")
public class OrderServlet extends SlingSafeMethodsServlet {
    private static final Logger LOGGER = LoggerFactory.getLogger(ProductsModel.class);

    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        Logger log = LoggerFactory.getLogger(ProductsModel.class);
        log.info("adfasdfasdfa");
        // String name = request.getParameter("fname");

        // log.info(name);

        // Perform any necessary processing on the form data

        // Redirect to the target page with the form data as a parameter
        // String targetPagePath = "mini-project/order-page.html"; // Specify the target page path
        // response.sendRedirect(targetPagePath + "?name=" + name + "?address=" + address + "?payment=" + payment) ;
    }   
}