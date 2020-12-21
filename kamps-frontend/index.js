document.addEventListener("DOMContentLoaded", () => {
  fetchCamps();
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
          camp.attributes.name,
          camp.attributes.img_src,
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

function getReviews() {}
