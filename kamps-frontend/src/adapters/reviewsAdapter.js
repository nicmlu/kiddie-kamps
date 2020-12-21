// fetches from Reviews API
class ReviewsAdapter {
  constructor() {
    this.baseURL = "http://127.0.0.1:3000/reviews";
  }

  getReviews() {
    return fetch(this.baseURL)
      .then(resp => resp.json())
      .then(json => json.data);
  }

  postReviews(data) {
    return fetch(this.baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .catch(err => alert(err));
  }
}
