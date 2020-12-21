class Review {
  static all = [];

  constructor(id, approve, comment, name, camp_id) {
    this.id = id;
    this.approve = approve;
    this.comment = comment;
    this.name = name;
    this.camp_id = camp_id;
    this.adapter = new ReviewsAdapter();
  }
}
