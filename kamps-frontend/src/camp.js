class Camp {
  constructor(
    img_src,
    name,
    description,
    website,
    borough,
    zip,
    phone,
    street_address
  ) {
    this.img_src = img_src;
    this.name = name;
    this.description = description;
    this.website = website;
    this.borough = borough;
    this.zip = zip;
    this.phone = phone;
    this.street_address = street_address;
    this.form = document.querySelector("#review-form");
  }

  createCampCard() {
    // grab camp section
    //debugger;
    const campSection = document.querySelector(".row");

    //create camp card div/area
    const campDiv = document.createElement("div");
    campDiv.className = "camp-card";
    campDiv.setAttribute("dataset-id", `${this.id}`);
    campDiv.className = "col-s12-m6-l4";
    campDiv.className = "col-lg-3";
    campDiv.className = "col-md-6";
    campDiv.className = "mb-4";
    campDiv.className = "card-group";

    //create camp card div
    const campCard = document.createElement("div");
    campCard.className = "card";

    //create image element for card
    const imgElem = document.createElement("img");
    imgElem.className = "card-img-top";
    imgElem.className = "img-thumbnail";

    //add camp image to card
    const pic = `${this.img_src}`;
    imgElem.src = pic;

    //create card content div/area
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

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
    contactArea.className = "list-group";
    contactArea.className = "list-group-flush";

    // add contact info elements
    const contactAddress = document.createElement("li");
    contactAddress.className = "list-group-item";
    const contactPhone = document.createElement("li");
    contactPhone.className = "list-group-item";
    const contactWebsite = document.createElement("li");
    contactWebsite.className = "list-group-item";

    // add contact info to card
    contactAddress.innerHTML += `Address: ${this.street_address}`;
    contactPhone.innerHTML += `Phone: ${this.phone}`;
    contactWebsite.innerHTML += `<a href="${this.website}" target = "_blank"> Click Here for Camp Website </a>`;

    // add card footer
    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

    // add footer buttons
    const newReviewBtn = document.createElement("button");

    newReviewBtn.className = "btn";
    newReviewBtn.className = "btn-sm";
    newReviewBtn.className = "btn-outline-primary";
    newReviewBtn.className = "new-review-btn";
    newReviewBtn.innerHTML = "Add Review";

    const allReviewsBtn = document.createElement("button");

    allReviewsBtn.className = "btn";
    allReviewsBtn.className = "btn-sm";
    allReviewsBtn.className = "btn-outline-primary";
    allReviewsBtn.className = "all-reviews-btn";
    allReviewsBtn.innerHTML = "See Reviews";

    // add event listeners to footer buttons

    newReviewBtn.addEventListener(
      "click",
      event => showFormModal(event),
      false
    );
    allReviewsBtn.addEventListener("click", () => renderReviews(), false);

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
    //debugger;
  }

  createReview(event) {
    event.preventDefault();
    const userApprove = document.querySelector("#approve").value;
    const userComment = document.querySelector("#comment").value;
    const userName = document.querySelector("#name").value;
    const camp_id = document.querySelector("#camp_id").value;
    const newReview = {
      approve: userApprove,
      comment: userComment,
      name: userName,
      camp_id: camp_id
    };

    // post request to add review to db
    fetch(BASE_URL + "/reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
        // display review on review modal
        .then(resp => resp.json())
        .then(review => {
          let r = new Review(
            review.approve,
            review.comment,
            review.name,
            review.camp_id
          );
          debugger;
          r.renderReview();
        })
    });
  }
}
