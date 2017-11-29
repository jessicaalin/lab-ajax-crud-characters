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

  $('#new-character-form').submit(() => {
    event.preventDefault();
    console.log("click!");
    const charId = $("#edit-id").val();
    const nameChar = $("#name").val();
    const occupationChar = $("#occupation").val();
    const weaponChar = $("#weapon").val();
    const debtChar = $("#debt").val();
    charactersAPI.createOneRegister(nameChar, occupationChar, weaponChar, debtChar);
  });

  $('#delete-one').click(() => {
    console.log("click!");
    charactersAPI.deleteOneRegister();

  });

  $('#edit-character-form').submit(() => {
    event.preventDefault();
    console.log("click!");
    const id = $("#edit-id").val();
    const nameEdit = $("#edit-name").val();
    const occupationEdit = $("#edit-occupation").val();
    const weaponEdit = $("#edit-weapon").val();
    const debtEdit = $("#edit-debt").val();
    charactersAPI.updateOneRegister(id, nameEdit, occupationEdit, weaponEdit, debtEdit);
  });


});
