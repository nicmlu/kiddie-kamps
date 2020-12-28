class Camp {
  constructor(
    id,
    img_src,
    name,
    description,
    website,
    borough,
    street_address,
    zip,
    phone
  ) {
    this.id = id;
    this.img_src = img_src;
    this.name = name;
    this.description = description;
    this.website = website;
    this.borough = borough;
    this.street_address = street_address;
    this.zip = zip;
    this.phone = phone;
    this.campsAdapter = new CampsAdapter();
    // this.reviews = this.reviews;
  }

  fetchAndLoadCamp() {
    this.campsAdapter.getCamps().then(camps => {
      camps.data.forEach(camp => {
        let campObj = new Camp(
          camp.id,
          camp.attributes.img_src,
          camp.attributes.name,
          camp.attributes.description,
          camp.attributes.website,
          camp.attributes.borough,
          camp.attributes.street_address,
          camp.attributes.zip,
          camp.attributes.phone
        );
        campObj.createCampCard();
      });
    });
  }

  createCampCard() {
    // grab camp section
    const campSection = document.querySelector(".row");

    //create camp card div/area
    const campDiv = document.createElement("div");
    campDiv.classList.add(
      "camp-card",
      "col-s12-m6-l4",
      "col-lg-3",
      "col-md-6",
      "mb-4",
      "card-group"
    );
    campDiv.setAttribute("data-id", `${this.id}`);

    //create camp card div
    const campCard = document.createElement("div");
    campCard.classList.add("card");

    //create image element for card
    const imgElem = document.createElement("img");
    imgElem.classList.add("card-img-top", "img-thumbnail");

    //add camp image to card
    const pic = `${this.img_src}`;
    imgElem.src = pic;

    //create card content div/area
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //create card title element
    const cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";

    //add camp name as card title
    cardTitle.innerHTML += `${this.name}`;

    // create card content element
    const infoArea = document.createElement("p");
    infoArea.className = "card-text";

    // add camp description to card content element
    infoArea.innerHTML += `${this.description}`;

    // add contact info area
    const contactArea = document.createElement("ul");
    contactArea.classList.add("list-group", "list-group-flush");

    // add contact elements and info
    const contactAddress = document.createElement("li");
    contactAddress.classList.add("list-group-item");
    contactAddress.innerHTML += `Address: ${this.street_address}`;

    const contactPhone = document.createElement("li");
    contactPhone.classList.add("list-group-item");
    contactPhone.innerHTML += `Phone: ${this.phone}`;

    const contactWebsite = document.createElement("li");
    contactWebsite.classList.add("list-group-item");
    contactWebsite.innerHTML += `<a href="${this.website}" target = "_blank"> Click Here for Camp Website </a>`;

    // add card footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    // add footer buttons
    const newReviewBtn = document.createElement("button");
    newReviewBtn.classList.add("btn", "btn-sm", "btn-outline-primary");
    newReviewBtn.className = "new-review-btn";
    newReviewBtn.innerHTML = "Add Review";

    const allReviewsBtn = document.createElement("button");

    allReviewsBtn.classList.add("btn", "btn-sm", "btn-outline-primary");
    allReviewsBtn.className = "all-reviews-btn";
    allReviewsBtn.innerHTML = "See Reviews";

    // add event listeners to footer buttons

    newReviewBtn.addEventListener("click", showFormModal.bind(this));

    allReviewsBtn.addEventListener("click", fetchCampReviews.bind(this));

    // Add newly created elements to the DOM
    campSection.appendChild(campDiv);

    campDiv.appendChild(campCard);

    campCard.appendChild(imgElem);

    campCard.appendChild(cardBody);

    cardBody.appendChild(cardTitle);

    cardBody.appendChild(infoArea);

    campCard.appendChild(contactArea);

    contactArea.appendChild(contactAddress);
    contactArea.appendChild(contactPhone);
    contactArea.appendChild(contactWebsite);

    campCard.appendChild(cardFooter);

    cardFooter.appendChild(newReviewBtn);
    cardFooter.appendChild(allReviewsBtn);
  }
}

function showFormModal() {
  // opens review form modal
  const formModal = document.getElementById("add-modal");
  $(formModal).modal("show", {
    backdrop: "static"
  });

  const reviewForm = document.getElementById("review-form");

  reviewForm.innerHTML += `<input type="hidden" id="camp_id" name="camp_id" value=${this.id}></input>`;
  reviewForm.addEventListener("submit", e => reviewFormSubmission(e));
}

//function addFormListener() {}

function reviewFormSubmission(e) {
  e.preventDefault();
  const formModal = document.getElementById("add-modal");

  let userApprove = e.target.approve.value;
  let userComment = e.target.comment.value;
  let userName = e.target.name.value;
  let camp_id = e.target.camp_id.value;

  let data = {
    approve: userApprove,
    comment: userComment,
    name: userName,
    camp_id: parseInt(camp_id)
  };

  fetch(`http://127.0.0.1:3000/camps/${camp_id}/reviews`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(review => {
      let r = new Review(
        review.data.id,
        review.data.attributes.approve,
        review.data.attributes.comment,
        review.data.attributes.name,
        review.data.attributes.camp.id
      );
      alert("Review Saved!");
      $(formModal).modal("hide");
    });
}

// show new review modal after button click and add event listener for new review form submission

//retrieve all camp reviews
function fetchCampReviews(e) {
  const selectedCampId = parseInt(this.id);
  const selectedCampReviews = [];
  fetch(`http://127.0.0.1:3000/reviews`)
    .then(resp => resp.json())
    .then(reviews => {
      reviews.data.forEach(review => {
        let reviewCampId = review.attributes.camp.id;
        if (selectedCampId == reviewCampId) {
          selectedCampReviews.push(
            new Review(
              review.id,
              review.attributes.approve,
              review.attributes.comment,
              review.attributes.name,
              review.attributes.camp.id
            )
          );
        }
      });
      const container = document.querySelector("#review-row");
      removeAllChildNodes(container);
      selectedCampReviews.forEach(review => createReviewCard(review));
    });
}

//create reviews card and insert data

function createReviewCard(review) {
  // grab review section
  let reviewSection = document.getElementById("review-row");

  //create review card div/area
  let reviewDiv = document.createElement("div");
  reviewDiv.setAttribute("data-id", `${review.id}`);

  //create review card
  let reviewCard = document.createElement("div");
  reviewCard.classList.add("card");

  //create header element for card
  let headerDiv = document.createElement("div");
  headerDiv.classList.add("card-header");

  //create delete button for review card
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML += `Delete`;
  deleteBtn.addEventListener("click", deleteReview);

  // add kid approved icon to review card header
  let currentRating = `${review.approve}`;

  const approved = currentRating;

  let approvedArea;

  switch (approved) {
    case "Yes":
      approvedArea = headerDiv.innerHTML += `<span>Kid Approved: &#10003; </span>`;
      break;
    case "No":
      approvedArea = headerDiv.innerHTML += `<span>Kid Approved: &#10007; </span>`;
      break;
  }

  //add delete button to review card heading
  headerDiv.append(deleteBtn);

  //create review card content div/area
  let reviewBodyDiv = document.createElement("div");
  reviewBodyDiv.classList.add("card-body");

  //create review card block quote div
  let reviewBodyBlock = document.createElement("blockquote");
  reviewBodyBlock.classList.add("blockquote-mb-0");

  //create review comment element
  let reviewBodyElem = document.createElement("p");

  //add review comment to element
  reviewBodyElem.innerHTML += `${review.comment}`;

  //create review comment footer
  let reviewFooterElem = document.createElement("footer");
  reviewFooterElem.classList.add("blockquote-footer");

  //add review author to comment footer
  reviewFooterElem.innerHTML += `${review.name}`;

  // Add newly created elements to the DOM
  reviewSection.appendChild(reviewDiv);

  reviewDiv.appendChild(reviewCard);

  reviewCard.appendChild(headerDiv);

  reviewCard.appendChild(reviewBodyDiv);

  reviewBodyDiv.appendChild(reviewBodyBlock);

  reviewBodyBlock.appendChild(reviewBodyElem);

  reviewBodyBlock.appendChild(reviewFooterElem);

  showReviewsModal();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function showReviewsModal() {
  const allReviewsModal = document.getElementById("all-modal");
  $(allReviewsModal).modal("show", {
    backdrop: "static"
  });
}

function deleteReview() {
  const reviewId = parseInt(
    event.target.parentElement.parentElement.parentElement.dataset.id
  );
  const reviewModal = document.getElementById("all-modal");
  fetch(`http://127.0.0.1:3000/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  });
  // .then(res => res.json());
  alert("Review Deleted!");
  $(reviewModal).modal("hide");
}
