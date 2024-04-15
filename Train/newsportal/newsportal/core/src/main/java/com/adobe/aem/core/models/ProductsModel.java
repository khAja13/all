package com.adobe.aem.core.models;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.osgi.framework.FrameworkUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Resource;
import javax.inject.Inject;
import javax.servlet.http.HttpSession;

@Model(adaptables = SlingHttpServletRequest.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ProductsModel {
    static final Logger log = LoggerFactory.getLogger(ProductsModel.class);
    ObjectMapper objectMapper = new ObjectMapper();
    List<Product> productObjectList = null;
    List<String[]> comments = new ArrayList<>();
    List<String[]> orders = new ArrayList<>();
    int start = 0;
    int end = 8;

    @Inject
    private SlingHttpServletRequest request;

    public ProductsModel getSharedObject() {
        HttpSession session = request.getSession(true);
        ProductsModel sharedObject = (ProductsModel) session.getAttribute("sharedObject");

        if (sharedObject == null) {
            sharedObject = new ProductsModel();

            log.info("new object created");

            session.setAttribute("sharedObject", sharedObject);
            log.info(session.getAttribute("sharedObject").toString());
        }

        return sharedObject;
    }

    public List<String[]> getProducts() throws IOException {

        JsonNode jsonNode = objectMapper.readTree(FrameworkUtil.getBundle(ProductsModel.class)
        .getBundleContext()
        .getBundle()
        .getResource("index.json"));

         TypeFactory typeFactory = objectMapper.getTypeFactory();
         CollectionType productListType = typeFactory.constructCollectionType(List.class, Product.class);

         productObjectList = objectMapper.convertValue(jsonNode, productListType);

        return resizeProductsArray();
    }

    public List<String[]> resizeProductsArray() {
        List<String[]> ans = new ArrayList<>();

        if (productObjectList != null) {
            for (int i = 0; i < productObjectList.size(); i++){

                if (i > end) continue;

                Product product = productObjectList.get(i);

                String[] images = product.getImages();

                String[] arr = {product.getImage(), product.getTitle(), product.getDescription(), product.getId(), product.getAbout(), product.getPrice(), images[0], images[1], images[2]};

                ans.add(arr);
            }
        }

        return ans;
    }

    public List<String[]> getProductById() {

        if (productObjectList == null) {
            try {
                getProducts();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        int productId = Integer.parseInt(request.getParameter("q"));

        List<String[]> result = new ArrayList<>();
        String[] arr = {};
        
        if (productObjectList != null) {
            for (int i = start; i < productObjectList.size(); i++){

                if (i > end) continue;

                Product product = productObjectList.get(i);


                if (productId == Integer.parseInt(product.getId())) {

                    String[] images = product.getImages();
                    
                    arr = new String[]{product.getImage(), product.getTitle(), product.getDescription(), product.getId(), product.getAbout(), product.getPrice(), images[0], images[1], images[2]};

                    result.add(arr);
                    setComments(product.getComments());
                }
            }
        }

        return result;
    }

    public void setComments(List<Comment> commentsList) {

        for (Comment comment: commentsList) {
            String[] arr  = {comment.getName(), comment.getTime(), comment.getMessage(), comment.getLikes(), comment.getDislikes()};

            comments.add(arr);
        }
    }

    public List<String[]> getCommentsById() {
        return comments;
    }

    public List<String[]> getOrder() {
        try {
            getProducts();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        int id = Integer.parseInt(request.getParameter("q"));

        if (productObjectList != null) {
            for (int i = start; i < productObjectList.size(); i++){

                if (i > end) continue;

                Product product = productObjectList.get(i);

                if (id == Integer.parseInt(product.getId())) {
                    String[] arr = {product.getImage(), product.getTitle(), product.getDescription(), product.getId(), product.getAbout()};

                    orders.add(arr);
                        
                    break;
                }
            }
        }

        log.info(orders.toString());

        return orders;
    }

    public void nextPage() {
        start = end + 1;
        end = end + 10;

        log.info(String.valueOf(start));
        log.info(String.valueOf(end));
    }
}
