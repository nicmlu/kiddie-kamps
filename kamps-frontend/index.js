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
  //debugger;
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
  }) // confirm review save
    .then(newReview => {
      alert("post created!");
      closeReviewsModal();
    });

  function closeReviewsModal() {
    // closes review form modal
    const reviewsModal = document.getElementById("all-modal");
    $(reviewsModal).modal("hide");
  }
}

//create reviews card and insert data
function renderReviews() {
  //debugger;
  // grab review section
  let reviewSection = document.getElementById("review-row");

  //create review card div/area
  let reviewDiv = document.createElement("div");

  //create review card
  let reviewCard = document.createElement("div");
  reviewCard.classList.add("card");

  //create header element for card
  let headerDiv = document.createElement("div");
  headerDiv.classList.add("card-header");

  // add kid approved icon to review card
  let rating = `${this.approve}`;

  let approved;

  if ((rating = "true")) {
    approved = headerDiv.innerHTML += `<span>Kid Approved: &#10003; </span>`;
  } else {
    approved = headerDiv.innerHTML += `<span>Kid Approved: &#10007; </span>`;
  }
  //debugger;

  //create review card content div/area
  let reviewBodyDiv = document.createElement("div");
  reviewBodyDiv.classList.add("card-body");

  //create review card block quote div
  let reviewBodyBlock = document.createElement("blockquote");
  reviewBodyBlock.classList.add("blockquote-mb-0");

  //create review comment element
  let reviewBodyElem = document.createElement("p");

  //add review comment to element
  reviewBodyElem.innerHTML += `${this.comment}`;

  //create review comment footer
  let reviewFooterElem = document.createElement("footer");
  reviewFooterElem.classList.add("blockquote-footer");

  //add review author to comment footer
  reviewFooterElem.innerHTML += `${this.name}`;

  // Add newly created elements to the DOM
  //debugger;
  reviewSection.appendChild(reviewDiv);

  reviewDiv.appendChild(reviewCard);

  reviewCard.appendChild(headerDiv);

  reviewCard.appendChild(reviewBodyDiv);

  reviewBodyDiv.appendChild(reviewBodyBlock);

  reviewBodyBlock.appendChild(reviewBodyElem);

  reviewBodyBlock.appendChild(reviewFooterElem);
}

function showReviewsModal() {
  // fetches reviews and inserts data into modal
  renderReviews();
  // opens camp reviews modal
  const allReviewsModal = document.getElementById("all-modal");
  $(allReviewsModal).modal("show", {
    backdrop: "static"
  });
}
