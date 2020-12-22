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

// show new review modal after button click and add event listener for new review form submission
function showFormModal() {
  // opens review form modal
  const formModal = document.getElementById("add-modal");
  $(formModal).modal("show", {
    backdrop: "static"
  });
  //debugger;
  const reviewForm = document.getElementById("review-form");
  debugger;
  reviewForm.addEventListener("submit", createReview);
}

// toggle between like/dislike icon on review form
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

function createReview() {
  debugger;
  event.preventDefault();
  const userApprove = document.querySelector("#approve").checked;
  const userComment = document.querySelector("#comment").value;
  const userName = document.querySelector("#name").value;
  const camp_id = document.querySelector("#camp_id").value;
  const newReview = {
    approve: userApprove,
    comment: userComment,
    name: userName,
    camp_id: camp_id
  };

  //   postFetchReview(newReview);
  fetch(`${BASE_URL}/reviews`, {
    method: "POST",
    body: JSON.stringify(newReview),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }) // display review on review modal
    .then(resp => resp.json())
    .then(newReview => {
      let r = new Review(
        newReview.approve,
        newReview.comment,
        newReview.name,
        newReview.camp_id
      );
      r.renderReviews();
    });
}
