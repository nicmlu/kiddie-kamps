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
  reviewForm.addEventListener("submit", e => createReviewFormHandler(e));
}

function createReviewFormHandler(e) {
  e.preventDefault();
  const userApprove = document.querySelector("#approve").checked;
  const userComment = document.querySelector("#comment").value;
  const userName = document.querySelector("#name").value;
  const camp_id = document.querySelector("#camp_id").value;
  createReview(userApprove, userComment, userName, camp_id);
}

function createReview(userApprove, userComment, userName, camp_id) {
  const formData = { userApprove, userComment, userName, camp_id };
  debugger;
  fetch("http://localhost:3000/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(review => {
      console.log(review);
      const reviewData = review.data;
      let newReview = new Review(reviewData);
      document.querySelector(
        "#review-row"
      ).innerHTML += newReview.renderReviews();
    });
}

// function createReview(userApprove, userComment, userName, camp_id) {
//   const newReviewData = {
//     approve: userApprove,
//     comment: userComment,
//     name: userName,
//     camp_id: camp_id
//   };
//   debugger;
//   //   postFetchReview(newReview);
//   fetch(`${BASE_URL}/reviews`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newReviewData)
//   })
//     .then(response => response.json())
//     // confirm review save
//     .then(review => {
//       let r = new Review(
//         review.id,
//         review.comment,
//         review.approve,
//         review.name,
//         review.camp_id
//       );
//       r.renderReviews();
//       alert("Review Created!");
//       closeReviewsModal();
//     });

function closeReviewsModal() {
  // closes review form modal
  const reviewsModal = document.getElementById("all-modal");
  $(reviewsModal).modal("hide");
}
// }
