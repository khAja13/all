function imageSlider() {
    const imageContainer = document.querySelectorAll('.cmp-main__carousel__container');
    imageContainer.forEach(imageCont => {
      let i = 0, n = imageCont.children.length;
      function slider(i) {
        setTimeout(() => {
          imageCont.style.transform = `translateY(${-100*(i+1)}%)`;
          i++;
          if (i > n-1) {
            imageCont.style.transform = `translateY(${0}%)`;
            i=0;
          }
          slider(i);
        }, 2500 * (i+1));
      }
      slider(i);
    })
}
imageSlider();

// on scroll making the navbar in different color
window.onscroll = function () {
  if (window.location.href.includes('products.html') || window.location.href.includes('buy-now.html')) return;
  
  if (document.documentElement.scrollTop > 50) {
    document.querySelector("#navbar__header").style.backgroundColor = "rgba(0, 0, 0)";
  } else {
    document.querySelector("#navbar__header").style.backgroundColor = "";
  }
};

const carouselContent = document.querySelector('.cmp-carousel__content')
const mediumBanner = document.querySelector('#medium-banner__imaging img')
let makePaymentButton = document.getElementById('make-payment');
let paymentForm = document.getElementById('payment-form');
let closeForm = document.getElementById('close');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let quantity = document.getElementById('quantity');
const form = document.querySelector('.cmp-form');
let userName = JSON.parse(localStorage.getItem('USER'));

// adding aos to the carousels
if (carouselContent) carouselContent.setAttribute('data-aos', 'zoom-in')
if (mediumBanner) mediumBanner.setAttribute('data-aos', 'fade-right')

// making the navbar black on different pages
if (window.location.href.includes('products.html') || window.location.href.includes('buy-now.html')) {
  document.getElementById('navbar__header').style.backgroundColor = "black";
}

// if make payment button is clicked to open the form
if (makePaymentButton) {
  // setting the price along with quantity included
  document.getElementById('toBePrice').value = parseInt(document.getElementById('price').value) * parseInt(document.getElementById('quantity').value);

  // increment the value if clicked on +
  plus.addEventListener('click', function() {
    quantity.value = parseInt(quantity.value) + 1;
    document.getElementById('toBePrice').value = parseInt(document.getElementById('price').value) * parseInt(document.getElementById('quantity').value);
  })
  
    // decrement the value if clicked on -
  minus.addEventListener('click', function() {
    if (parseInt(quantity.value) == 1) return;
    quantity.value = parseInt(quantity.value) - 1;
    document.getElementById('toBePrice').value = parseInt(document.getElementById('price').value) * parseInt(document.getElementById('quantity').value);
  })

  // checking for the localstorage stuff and opening the form
  makePaymentButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (userName) {
      paymentForm.classList.toggle('show');
      document.body.classList.toggle('fixed');
    } else {
      alert("Please login...")
    }
    
  })

  // payment form submission
  form.addEventListener('submit', (e) => submitForm(e));

  // payment form submission function
  function submitForm(e) {
    e.preventDefault();
    
    const paymentContainer = document.querySelectorAll('.payment-container');
    
    if (paymentContainer[0].style.display == 'block') {
      const upiId = document.getElementById('upiid');
      let counter = 0;

      if (upiId.value.length != 14) {
        putError(upiId.previousElementSibling, upiId);
      } else {
        putSuccess(upiId.previousElementSibling, upiId);
        counter++;
      }

      if (counter != 1) return;

    } else if (paymentContainer[1].style.display == 'block') {
      const cardnumber = document.getElementById('cardnumber');
      const expiry = document.getElementById('expiry');
      const cvv = document.getElementById('cvv');
      let counter = 0;
  
      if (cardnumber.value.length != 19) {
        putError(cardnumber.previousElementSibling, cardnumber);
        cardnumber.nextElementSibling.innerText = '*Card number cannot be empty.'
        cardnumber.nextElementSibling.style.color = 'red';
      } else {
        putSuccess(cardnumber.previousElementSibling, cardnumber);
        counter++;
        cardnumber.nextElementSibling.innerText = ''
        cardnumber.nextElementSibling.style.color = '';
      }
  
      if (expiry.value.length <= 0) {
        putError(expiry.previousElementSibling, expiry);
        expiry.nextElementSibling.innerText = '*Expiry is needed'
        expiry.nextElementSibling.style.color = 'red'
      } else {
        putSuccess(expiry.previousElementSibling, expiry);
        expiry.nextElementSibling.innerText = '*Expiry is needed'
        expiry.nextElementSibling.style.color = 'red'
        counter++;
      }
      
      if (cvv.value.length != 3) {
        putError(cvv.previousElementSibling, cvv);
      } else {
        putSuccess(cvv.previousElementSibling, cvv);
        counter++;
      }
  
      if (counter != 3) return;
    }

    document.querySelector('.notification').classList.toggle('show-notification');
    document.querySelector('.notification').style.animation = 'go 0.6s linear'

    document.querySelector('.notification').addEventListener('animationend', function() {
      setInterval(async () => {
        const productId = document.querySelector(".cmp-buy-card__container").getAttribute('product-id');
        
        const resp = await fetch('/bin/custom/path', {
          method: "POST",
          mode: "cors",
          headers: {
            credentials: 'same-origin',
          },
          body: JSON.stringify({
            "id": productId,
            "image": document.querySelector('.cmp-buy-card__container__image-part img').src,
            "name": document.getElementById('fname').value,
            "address": document.getElementById('address').value,
            "phone": document.getElementById('phone').value,
            "title": document.querySelector('.cmp-buy-card__content__text h1').textContent,
            "description": document.querySelector('.cmp-buy-card__content__text p').textContent
          }),
        });

        const data = await resp.json();

        window.location.href = 'http://localhost:4502/content/newsportal/us/en/mini-project/order.html?q='+productId;
      }, 1500);
    })
  }

  // to close the popup form 
  closeForm.addEventListener('click', function() {
    paymentForm.classList.toggle('show');
    document.body.classList.toggle('fixed');
  })
}

// to create the dropdown and inserting it based on the user login
const headerUserLogo = document.getElementById('header__user-logo');
const parent = headerUserLogo.parentElement;

const container = document.createElement('div');
const loginAnchor = document.createElement('a');
const SignupAnchor = document.createElement('a');
const nameAnchor = document.createElement('a');
const signoutAnchor = document.createElement('a');

loginAnchor.href = '#'
SignupAnchor.href = '#'
nameAnchor.href = '#'
signoutAnchor.href = '#'

loginAnchor.innerText = "Login"
loginAnchor.id = 'loginText'
SignupAnchor.innerText = "Sign up"
SignupAnchor.id = 'signupText'

container.className = 'header-dropdown';

if (userName) {
  nameAnchor.innerText = userName.email.split('@')[0]
  nameAnchor.id = 'profile-name'
  signoutAnchor.innerText = "Sign out"
  signoutAnchor.id = 'signout'
  container.appendChild(nameAnchor)
  container.appendChild(signoutAnchor)

  signoutAnchor.addEventListener('click', function () {
    localStorage.removeItem('USER');
    window.location.reload()
  })
} else {
  container.appendChild(loginAnchor)
  container.appendChild(SignupAnchor)
}

parent.appendChild(container);
parent.style.position = 'relative';

headerUserLogo.addEventListener('click', function() {
  
  const headerDropDown = document.querySelector('.header-dropdown');

  if (headerDropDown != null) {
    headerDropDown.classList.toggle('active');
    return;
  }

})

//
if (document.getElementById('loginText')) {
  document.getElementById('loginText').addEventListener('click', function() {
    document.querySelector('.mini_login').classList.toggle('show-login');
    document.body.classList.toggle('fixed')
  })
}

document.getElementById('close-login').addEventListener('click', function() {
  document.querySelector('.mini_login').classList.toggle('show-login');
  document.body.classList.toggle('fixed')
})

//
if (document.getElementById('signupText')) {
  document.getElementById('signupText').addEventListener('click', function() {
    document.querySelector('.mini_signup').classList.toggle('show-signup');
    document.body.classList.toggle('fixed')
  })
}

document.getElementById('close-signup').addEventListener('click', function() {
  document.querySelector('.mini_signup').classList.toggle('show-signup');
  document.body.classList.toggle('fixed')
})

// the buy now, left side images showing 
const leftImages = document.querySelectorAll('.small-images img');
const realImage = document.querySelector('#real-image');

if (leftImages.length) {
  realImage.src = leftImages[0].src;

  leftImages.forEach(image => {
    image.addEventListener('click', function() {
      const activeImage = document.querySelector('.active-image');
      
      realImage.src = image.src;
      activeImage.classList.toggle('active-image');
      image.classList.toggle('active-image');
    })
  })
}

// onclick of a payment methods showing the relevant payment method
const radios = document.querySelectorAll('input[type="radio"]')
const paymentContainer = document.querySelectorAll('.payment-container')
let activePayment = '';
let prevPayment = '';

if (radios.length) {
  radios.forEach((radio, index) => {

    if (index != paymentContainer.length) {
      paymentContainer[index].style.display = 'none';
    }

    radio.addEventListener('change', function() {
      
      if (index == paymentContainer.length) {
        activePayment.style.display = 'none';
        prevPayment.style.display = 'none';
        return;
      }

      prevPayment = activePayment;
      activePayment = paymentContainer[index];

      if (prevPayment) prevPayment.style.display = 'none';
      activePayment.style.display = 'block';
    })
  })

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const formWrapper = document.querySelector('.cmp-form__wrapper');

  next.addEventListener('click', function() {
    if (inputValidator()) {
      return;
    }
    if (document.getElementById('cod').checked) {
        submitForm(event);
        return;
    }
    formWrapper.style.transform = 'translateX(-100%)';
  })

  prev.addEventListener('click', function() {
    formWrapper.style.transform = 'translateX(0%)';
  })

  function inputValidator() {
    const name = document.getElementById('fname');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const upi = document.getElementById('upi');
    const card = document.getElementById('card');
    const cod = document.getElementById('cod');
    let count = 0;

    if (name.value.length == 0) {
      putError(name.previousElementSibling, name);
      name.nextElementSibling.innerText = '*Username cannot be empty.'
      name.nextElementSibling.style.color = 'red';
    }
    else if (name.value. length < 3) {
      putError(name.previousElementSibling, name);
      name.nextElementSibling.innerText = '*Username length should be more than 3.'
      name.nextElementSibling.style.color = 'red';
    } 
    else {
      putSuccess(name.previousElementSibling, name);
      name.nextElementSibling.innerText = ''
      name.nextElementSibling.style.color = '';
      count++;
    }
    
    if (phone.value.length == 0) {
      putError(phone.previousElementSibling, phone);
      phone.nextElementSibling.innerText = '*Phone number cannot be empty.'
      phone.nextElementSibling.style.color = 'red';
    }
    else if (phone.value.length != 10) {
      putError(phone.previousElementSibling, phone);
      phone.nextElementSibling.innerText = '*Invalid phone number.'
      phone.nextElementSibling.style.color = 'red';
    } 
    else {
      putSuccess(phone.previousElementSibling, phone);
      phone.nextElementSibling.innerText = ''
      phone.nextElementSibling.style.color = '';
      count++;
    }

    if (address.value.length == 0) {
      putError(address.previousElementSibling, address);
      address.nextElementSibling.innerText = '*Address cannot be empty';
      address.nextElementSibling.style.color = 'red';
    }
    if (address.value.length <= 5) {
      putError(address.previousElementSibling, address);
    } else {
      putSuccess(address.previousElementSibling, address);
      address.nextElementSibling.innerText = '';
      address.nextElementSibling.style.color = '';
      count++;
    }
    
    if (upi.checked || card.checked || cod.checked) {
      document.getElementById('payment-method-heading').style.color = '';
      count++;
    } else {
      document.getElementById('payment-method-heading').style.color = 'red';
    }

    if (count != 4) {
      return true;
    }
  }

  function putError(previous, present) {
    previous.style.color = 'red';
    present.style.border = '1px solid red';
  }

  function putSuccess(previous, present) {
    previous.style.color = '';
    present.style.border = '';
  }
}

// const imagePart = document.querySelector('.cmp-buy-card__container__image-part > img');

// if (imagePart) {
//   imagePart.addEventListener('mousemove', function(e) {
//     console.log(e)
//     const x = -e.clientX / 11;
//     const y = -e.clientY / 11;

//     imagePart.style.position = 'absolute';
//     imagePart.style.left = (x) + 'px';
//     imagePart.style.top = (y) + 'px';
//   })
//   imagePart.addEventListener('mouseout', function(e) {
//     imagePart.style.left = 0;
//     imagePart.style.top = 0;
//   })
// }

// document.getElementById('footer__container').innerHTML += '<div class="blob"> <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350"> <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/> </svg></div>';


