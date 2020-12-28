index.js file original code

document.addEventListener("DOMContentLoaded", () => {
fetchCamps();
changeTitle();
});

reviews = [];
camps = [];

const BASE_URL = "http://127.0.0.1:3000";

function fetchCamps() {
fetch(`${BASE_URL}/camps`)
.then(resp => resp.json())
.then(camps => {
//console.log(camps);
//debugger;
camps["data"].forEach(camp => {
//debugger;
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
\$(formModal).modal("show", {
backdrop: "static"
});
//debugger;
const reviewForm = document.getElementById("review-form");
//debugger;
reviewForm.addEventListener("submit", e => reviewFormSubmission);
}

function reviewFormSubmission(e) {
e.preventDefault();
let userApprove = document.querySelector("#approve").checked;
let userComment = document.querySelector("#comment").value;
let userName = document.querySelector("#name").value;
let camp_id = document.querySelector("#camp_id").value;

let formData = {
approve: userApprove,
comment: userComment,
name: userName,
camp_id: camp_id
};
debugger;
fetch(`${BASE_URL}/reviews`, {
method: "POST",
headers: { Accept: "application/json", "Content-Type": "application/json" },
body: JSON.stringify(formData)
})
.then(response => response.json())
.then(review => {
let r = new Review(
review.id,
review.approve,
review.comment,
review.name,
review.camp_id
);
alert("Review Saved!");
r.renderReviews();
});
}

// function createReview(userApprove, userComment, userName, camp_id) {
// const newReviewData = {
// approve: userApprove,
// comment: userComment,
// name: userName,
// camp_id: camp_id
// };
// debugger;
// // postFetchReview(newReview);
// fetch(`${BASE_URL}/reviews`, {
// method: "POST",
// headers: {
// "Content-Type": "application/json"
// },
// body: JSON.stringify(newReviewData)
// })
// .then(response => response.json())
// // confirm review save
// .then(review => {
// let r = new Review(
// review.id,
// review.comment,
// review.approve,
// review.name,
// review.camp_id
// );
// r.renderReviews();
// alert("Review Created!");
// closeReviewsModal();
// });

function closeReviewsModal() {
// closes review form modal
const reviewsModal = document.getElementById("all-modal");
\$(reviewsModal).modal("hide");
}
// }

function changeTitle() {
btn = document.querySelector("#change-title");

btn.addEventListener("click", titleChange);
}

function titleChange() {
title = document.querySelector(".navbar-brand");

title.innerHTML = "Get my Children Out of Here!";
}

function fetchCampReviews() {
const allReviews = [];
debugger;
this.ReviewsAdapter.getReviews().then(reviews => {
reviews.forEach(review =>
allReviews.push(new Review(review.approve, review.comment, review.name))
);
console.log(allReviews);
debugger;
});
}

function fetchCamps() {
fetch(`${BASE_URL}/camps`)
.then(resp => resp.json())
.then(json => json.data)
.then(camps => {
//console.log(camps);
//debugger;
camps.forEach(camp => {
//debugger;
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

let newCamp = new Camp(
camp.attributes.img_src,
camp.attributes.name,
camp.attributes.description,
camp.attributes.website,
camp.attributes.borough,
camp.attributes.zip,
camp.attributes.phone,
camp.attributes.street_address
);
allCamps.push(newCamp);
debugger;
allCamps.forEach(camp => camp.createCampCard());

this.reviewFormSubmission(e)

const formModal = document.getElementById("add-modal");
\$(formModal).modal("show", {
backdrop: "static"
});

let reviewObj = new Review(
review.id,
review.attributes.approve,
review.attributes.comment,
review.attributes.name,
review.attributes.camp.id
);

if ((rating = "Yes")) {
approved = headerDiv.innerHTML += `<span>Kid Approved: &#10003; </span>`;
} else {
approved = headerDiv.innerHTML += `<span>Kid Approved: &#10007; </span>`;
}
