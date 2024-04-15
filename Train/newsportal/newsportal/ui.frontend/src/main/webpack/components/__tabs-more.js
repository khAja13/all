document.addEventListener("DOMContentLoaded", () => {
  const arr = [
    {
      path: "/etc.clientlibs/newsportal/components/mini-tabs-more/clientlib/resources/1d.webp",
      color: "#14c8eb",
    },
    {
      path: "/etc.clientlibs/newsportal/components/mini-tabs-more/clientlib/resources/2d.webp",
      color: "#fa551e",
    },
    {
      path: "/etc.clientlibs/newsportal/components/mini-tabs-more/clientlib/resources/2d.webp",
      color: "#fad24b",
    },
    {
      path: "/etc.clientlibs/newsportal/components/mini-tabs-more/clientlib/resources/4d.webp",
      color: "#ffafa5",
    },
    {
      path: "/etc.clientlibs/newsportal/components/mini-tabs-more/clientlib/resources/5d.webp",
      color: "#ff8c19",
    },
    {
      path: "/etc.clientlibs/newsportal/components/mini-tabs-more/clientlib/resources/6d.webp",
      color: "#b4dc19",
    },
    {
      path: "/etc.clientlibs/newsportal/components/mini-tabs-more/clientlib/resources/7d.svg",
      color: "#b4c8e1",
    },
    {
      path: "/etc.clientlibs/newsportal/components/mini-tabs-more/clientlib/resources/8d.webp",
      color: "#c8aff0",
    },
  ];

  const dropDownLists = document.querySelectorAll(".dropdown-list");

  if (dropDownLists.length <= 0) return;
  
  let activeDropDown = dropDownLists[0];
  const dropDownImageContainer = document.querySelector(".dropdown-image-container");
  const dropDownImageContainer1 = document.querySelector(".dropdown-image-container1");
  
  dropDownImageContainer.style.backgroundColor = arr[activeDropDown.id-1].color;
  dropDownImageContainer1.style.backgroundColor = arr[activeDropDown.id-1].color;
  
  dropDownLists.forEach((dropDownList, index) => {
      if (index != 0) {
          dropDownList.children[1].classList.add("none");
        }
        
        dropDownList.addEventListener("click", function () {

            if (dropDownList.id === activeDropDown.id) return;
            
            dropDownImageContainer.children[0].src = arr[activeDropDown.id-1].path;
            dropDownImageContainer.style.backgroundColor = arr[activeDropDown.id-1].color;
            
            activeDropDown.children[1].classList.add("none");
            dropDownList.children[1].classList.remove("none");
            
            activeDropDown = dropDownList;
            
            dropDownImageContainer1.children[0].src = arr[activeDropDown.id-1].path;
            dropDownImageContainer1.style.backgroundColor = arr[activeDropDown.id-1].color;
        go();
    });
  });

  function go() {
    let element = document.querySelector(".dropdown-image-container1");

    if (!element) return;

    element.animate(
      [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
      {
        duration: 300,
      }
    );
  }

  go();
});
