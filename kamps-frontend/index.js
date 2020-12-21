document.addEventListener("DOMContentLoaded", () => {});

reviews = [];
camps = [];

const BASE_URL = "http://127.0.0.1:3000";

function getCamps() {
  // make a fetch request to /camps
  fetch(`${this.BASE_URL}/camps`)
    .then(resp => resp.json())
    .then(data => console.log(data))
    // populate the items and menus properties with the returned data
    // call renderItems
    .catch(err => alert(err));
}
