/*
    app.js
    Name: Sunand Shanthos Kumar
    StudentID: 301297793
    Date: 03/09/2023
*/

(function () {
  function start() {
      console.log("App Started...");
      let deleteButton = document.querySelectorAll('.btn-danger')
      for (button of deleteButton)
      {
          button.addEventListener('click', (event) => {
              if (!confirm("Are you sure")) {
                  event.preventDefault();
                  window.location.assign('/bookList');
              }
          });
          }
  }
  window.addEventListener("load", start);
})();