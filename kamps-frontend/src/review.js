class Review {
  static all = [];

  constructor(id, approve, comment, name, camp_id) {
    this.id = id;
    this.approve = approve;
    this.comment = comment;
    this.name = name;
    this.camp_id = camp_id;
  }

  //render rewiew instance method
  renderReviews() {
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

    if ((rating = "yes")) {
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
}
