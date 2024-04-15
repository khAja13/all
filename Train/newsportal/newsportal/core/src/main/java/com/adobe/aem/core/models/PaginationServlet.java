package com.adobe.aem.core.models;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.apache.sling.servlets.annotations.SlingServletPaths;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

@Component(service=Servlet.class)
@SlingServletPaths(value =   "/bin/custom/next")
public class PaginationServlet extends SlingAllMethodsServlet {

    @Override
    protected void doGet(final SlingHttpServletRequest req,
                         final SlingHttpServletResponse resp) throws ServletException, IOException {

        ProductsModel product = req.adaptTo(ProductsModel.class);
        Logger log = LoggerFactory.getLogger(ProductsModel.class);

        List<String[]> products = product.getProducts();

         resp.getWriter().write(new Gson().toJson(products));
    }
}
