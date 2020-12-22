class Camp {
  constructor(
    borough,
    name,
    website,
    img_src,
    description,
    zip,
    phone,
    street_address,
    id
  ) {
    this.img_src = img_src;
    this.name = name;
    this.description = description;
    this.website = website;
    this.borough = borough;
    this.zip = zip;
    this.phone = phone;
    this.street_address = street_address;
    this.id = id;
    //this.adapter = new CampsAdapter();
  }

  createCampCard() {
    // grab camp section
    debugger;
    const campSection = document.querySelector(".row");

    //create camp card div/area
    const campDiv = document.createElement("div");
    campDiv.className = "camp-card";
    campDiv.setAttribute("data-id", `${this.id}`);
    campDiv.classList.add("col-s12-m6-l4");
    campDiv.classList.add("col-lg-3");
    campDiv.classList.add("col-md-6");
    campDiv.classList.add("mb-4");
    campDiv.classList.add("card-group");

    //create camp card div
    const campCard = document.createElement("div");
    campCard.className = "card";

    //create image element for card
    const imgElem = document.createElement("img");
    imgElem.classList.add("card-img-top");
    imgElem.classList.add("img-thumbnail");

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
    contactWebsite.innerHTML += `<a href="${this.website}" target = "_blank"> Website: </a>`;

    // add card footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    // add footer buttons
    const newReviewBtn = document.createElement("button");

    newReviewBtn.classList.add("btn");
    newReviewBtn.classList.add("btn-sm");
    newReviewBtn.classList.add("btn-outline-primary");
    newReviewBtn.id = "new-review-btn";
    newReviewBtn.innerHTML = "Add Review";

    const allReviewsBtn = document.createElement("button");

    allReviewsBtn.classList.add("btn");
    allReviewsBtn.classList.add("btn-sm");
    allReviewsBtn.classList.add("btn-outline-primary");
    allReviewsBtn.id = "all-reviews-btn";
    allReviewsBtn.innerHTML = "See Reviews";

    // add event listeners to footer buttons

    newReviewBtn.addEventListener("click", () => showReviewModal(), false);
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
}
