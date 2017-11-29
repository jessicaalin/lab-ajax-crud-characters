class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      method: "GET",
      url: `${this.BASE_URL}/characters`
    })
    .then((apiResults) => {
      console.log("success!");
      console.log(apiResults);
    })
    .catch((err) => {
      console.log("error!");
      console.log(err);
    });
  }

  getOneRegister (id) {
    $.ajax({
      method: "GET",
      url: `${this.BASE_URL}/characters/${id}`
    })
    .then((apiResults) => {
      console.log("success!");
      console.log(apiResults);
    })
    .catch((err) => {
      console.log("error!");
      console.log(err);
    });
  }

  createOneRegister () {

  }

  deleteOneRegister () {

  }

  updateOneRegister () {

  }


}
