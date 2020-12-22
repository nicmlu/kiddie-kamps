document.addEventListener("DOMContentLoaded", () => {
  fetchCamps();
});

reviews = [];
camps = [];

const BASE_URL = "http://localhost:3000";

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
  //debugger;
  reviewForm.addEventListener("submit", e => createReview(e));
}

function createReview(e) {
  debugger;
  e.preventDefault();
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
      "Content-Type": "application/json"
    }
  }) // display review on review modal
    //.then(resp => resp.json())
    .then(newReview => {
      console.log(newReview);
      debugger;
      let r = new Review(newReview);
      r.renderReviews();
    });
}
