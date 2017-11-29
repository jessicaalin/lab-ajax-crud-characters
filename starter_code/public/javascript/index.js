const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').click(() => {
    console.log("click!");
    charactersAPI.getFullList();
  });

  $('#fetch-one').click(() => {
    console.log("click!");
    const idNumber = $("#character-id").val();
    charactersAPI.getOneRegister(idNumber);
  });

  $('#new-character-form').on('submit', (e) => {

  });
  
  $('#delete-one').click(() => {
    console.log("click!");
    charactersAPI.deleteOneRegister();

  });

  $('#edit-character-form').on('submit', (e) => {

  });


});
