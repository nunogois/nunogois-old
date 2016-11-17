$(document).ready(function() {

  $('#CurrentAge').text(CurrentAge('1989-12-27'));
  $('.CurrentYear').text(new Date().getFullYear());

  $(".page-scroll").click(function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    $(this).blur();
  });

});

function CurrentAge (birthDate) {
    var birthDate = new Date(birthDate);
    var today = new Date();

    var years = (today.getFullYear() - birthDate.getFullYear());

    if (today.getMonth() < birthDate.getMonth() ||
        today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}
