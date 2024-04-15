// const form = document.getElementById("form-container");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   form.action = "";

//   const target = e.target;

//   const mobile = target.mobile;
//   const card = target.card;
//   const cvv = target.cvv;
//   let count = 0;

//   if (mobile.value.length != 10) {
//     go(mobile.previousElementSibling, mobile);
//   } else {
//     go1(mobile.previousElementSibling, mobile);
//     count++;
//   }
//   if (card.value.length != 12) {
//     go(card.previousElementSibling, card);
//   } else {
//     go1(card.previousElementSibling, card);
//     count++;
//   }
//   if (cvv.value.length != 3) {
//     go(cvv.previousElementSibling, cvv);
//   } else {
//     go1(cvv.previousElementSibling, cvv);
//     count++;
//   }

//   if (count == 3) {
//     document.body.style.position = "fixed";
//     var modal = document.createElement("div");
//     modal.innerHTML = `
//                   <div class="modal-content">
//                     <span class="close-button">X</span>
//                     <p>The form has been submitted. Thank you.</p>
//                   </div>
//                 `;

//     modal.style.cssText = `
//                   position: fixed;
//                   z-index: 10;
//                   left: 0;
//                   right: 0;
//                   top: 0;
//                   bottom: 0;
//                   width: 100%;
//                   overflow: auto;
//                   background-color: rgba(0,0,0,0.8);
//                   color: black;
//                   font-size: 1.5rem;
//                   display: flex;
//                   justify-content: center;
//                   align-items: center;
//                 `;

//     modal.querySelector(".modal-content").style.cssText = `
//                   background-color: #fefefe;
//                   margin: auto;
//                   padding: 3rem 20px;
//                   border: 1px solid #888;
//                   width: 280px;
//                   position: relative;
//                   left: 0;
//                   right: 0;
//                   top: 0;
//                   bottom: 0;
//                 `;

//     modal.querySelector(".close-button").style.cssText = `
//                   color: #aaa;
//                   position: absolute;
//                   right: 20px;
//                   top: 10px;
//                   font-size: 18px;
//                   cursor: pointer;
//                 `;

//     document.body.appendChild(modal);

//     modal.querySelector(".close-button").onclick = function () {
//       modal.style.display = "none";
//       document.body.style.position = "static";
//     };
//   }
// });

// function go(previousElementSibling, currentElement) {
//   previousElementSibling.style.color = "red";
//   currentElement.style.border = "2px solid red";
// }

// function go1(previousElementSibling, currentElement) {
//   previousElementSibling.style.color = "";
//   currentElement.style.border = "";
// }