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

  createOneRegister (nameChar, occupationChar, weaponChar, debtChar) {
    $.ajax({
      method: "POST"  ,
      url: `${this.BASE_URL}/characters`,
      data: {
        name: nameChar,
        occupation: occupationChar,
        weapon: weaponChar,
        debt: debtChar
      }
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

  deleteOneRegister () {

  }

  updateOneRegister (id, nameEdit, occupationEdit, weaponEdit, debtEdit) {
    $.ajax({
      post: "PATCH",
      url: `${this.BASE_URL}/characters/${id}`,
      data: {
        name: nameEdit,
        occupation: occupationEdit,
        weapon: weaponEdit,
        debt: debtEdit
      }
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


}
