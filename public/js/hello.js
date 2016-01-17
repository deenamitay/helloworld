$( document ).ready(function() {

  var goToMembers = function(){
    //This gets the value from the text input
    var name = $('#name-input').val();

    // This pulls out the frist word consiting of
    // letters from the name string
    name = name.match(/[a-z]+/i)[0];

    // This redirects the user to the members route
    // with the first name
    window.location.href = '/members/'+name;
  };

  $('#name-btn').on('click',goToMembers);

  $('#name-input').on('keypress',function(event){
    //This is to check for an enter on the text input
    if (event.keyCode == 13){
      goToMembers();
      return;
    }

    //This checks if the keypress is a letter. If not, then
    //function gets down to the preventDefaults, which stops
    //the person from entering a non letter
    if((event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <= 122)){
      return;
    }
      event.preventDefault();
  });
});