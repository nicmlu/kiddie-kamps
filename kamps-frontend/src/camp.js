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
    const campSection = document.querySelector(".row");

    //create camp card div/area
    const campDiv = document.createElement("div");
    campDiv.classList.add("camp-card");
    campDiv.setAttribute("data-id", `${this.id}`);
    campDiv.classList.add("col-s12-m6-l4");
    campDiv.classList.add("col-lg-3");
    campDiv.classList.add("col-md-6");
    campDiv.classList.add("mb-4");
    campDiv.classList.add("card-group");

    //create camp card div
    const campCard = document.createElement("div");
    campCard.classList.add("card");

    //create image element for card
    const imgElem = document.createElement("img");
    imgElem.classList.add("card-img-top");
    imgElem.classList.add("img-thumbnail");

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
    contactArea.classList.add("list-group");
    contactArea.classList.add("list-group-flush");

    // add contact info elements
    const contactAddress = document.createElement("li");
    contactAddress.classList.add("list-group-item");
    const contactPhone = document.createElement("li");
    contactPhone.classList.add("list-group-item");
    const contactWebsite = document.createElement("li");
    contactWebsite.classList.add("list-group-item");

    // add contact info to card
    contactAddress.innerHTML += `Address: ${this.street_address}`;
    contactPhone.innerHTML += `Phone: ${this.phone}`;
    contactWebsite.innerHTML += `<a href="${this.website}" target = "_blank"> Click Here for Camp Website </a>`;

    // add card footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    // add footer buttons
    const newReviewBtn = document.createElement("button");

    newReviewBtn.classList.add("btn");
    newReviewBtn.classList.add("btn-sm");
    newReviewBtn.classList.add("btn-outline-primary");
    newReviewBtn.className = "new-review-btn";
    newReviewBtn.innerHTML = "Add Review";

    const allReviewsBtn = document.createElement("button");

    allReviewsBtn.classList.add("btn");
    allReviewsBtn.classList.add("btn-sm");
    allReviewsBtn.classList.add("btn-outline-primary");
    allReviewsBtn.className = "all-reviews-btn";
    allReviewsBtn.innerHTML = "See Reviews";

    // add event listeners to footer buttons

    newReviewBtn.addEventListener(
      "click",
      event => showFormModal(event),
      false
    );

    allReviewsBtn.addEventListener(
      "click",
      e => this.fetchCampReviews(e),
      false
    );

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
  // retrieve all camp reviews
  fetchCampReviews(e) {
    e.preventDefault();
    debugger;
    fetch(`http://127.0.0.1:3000/reviews`)
      .then(resp => resp.json())
      .then(reviews => {
        reviews["data"].forEach(review => {
          let reviewObj = new Review(
            review.attributes.approve,
            review.attributes.comment,
            review.attributes.name,
            review.attributes.camp.id
          );
          reviewObj.renderReviews();
        });
      });
  }
}
