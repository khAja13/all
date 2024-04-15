(function($, Granite) {
    "use strict";

    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: '[data-validation="buttonValidation"]',
        validate: function(el) {
            const minButtons = parseInt(el.getAttribute('data-min-buttons'));
            const maxButtons = parseInt(el.getAttribute('data-max-buttons'));
            const children = el.children;
            let count = 0;
            
            for (let i = 0; i < children.length; ++i) {
                if (children[i].hasAttribute('aria-setsize')) count++;
            }
            
            if (count < minButtons) return "Atleast, one button is needed."; 
            if (maxButtons < count) return "Atmost, two buttons are allowed.";
        }
    });
    
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: '[data-validation="cq-dialog-link-checkbox"]',
        validate: function(el) {
            const toGoLinkTextParent = document.querySelector("input[name='./togoLink']").parentElement.parentElement;
            if (el.checked) {
            	toGoLinkTextParent.classList.remove('none');
            } else {
            	toGoLinkTextParent.classList.add('none');
            }
        }
    });

})(Granite.$, Granite);