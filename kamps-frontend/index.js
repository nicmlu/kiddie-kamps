document.addEventListener("DOMContentLoaded", () => {
  fetchCamps();
  //   addListenerstoCard();
});

reviews = [];
camps = [];

const BASE_URL = "http://127.0.0.1:3000";

// function start() {
//   // start application and make a fetch request to /camps
//   const camp = new Camp();
//   camp.renderCamps();
// }

function fetchCamps() {
  fetch(`${BASE_URL}/camps`)
    .then(resp => resp.json())
    .then(camps => {
      //console.log(camps);
      //debugger;
      camps["data"].forEach(camp => {
        // create new camp JS object
        let campObj = new Camp(
          camp.attributes.img_src,
          camp.attributes.name,
          camp.attributes.description,
          camp.attributes.website,
          camp.attributes.borough,
          camp.attributes.zip,
          camp.attributes.phone,
          camp.attributes.street_address
        );
        campObj.createCampCard();
      });
    });
}

function getReviews() {}

// show new review modal after button click and add event listener for new review form submission
function showFormModal() {
  // opens review form modal
  const formModal = document.getElementById("add-modal");
  $(formModal).modal("show", {
    backdrop: "static"
  });
  //debugger;
  const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", createReview);
}

// toggle between like/dislike icon on review form
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
