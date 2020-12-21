// fetches from the Camps API

class CampsAdapter {
  constructor() {
    this.baseURL = "http://127.0.0.1:3000/camps";
  }

  getCamps() {
    return fetch(baseURL)
      .then(resp => resp.json())
      .then(json => json.data);
  }
}
