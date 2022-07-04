//Created by AdirBartov.com
const maxResponses = 3;

function stopForm() {
  var thisForm;
  thisForm = FormApp.getActiveForm();
  var responses = thisForm.getResponses();
  var len = responses.length;

  if(len === maxResponses){
    thisForm.setAcceptingResponses(false);
  }
}
