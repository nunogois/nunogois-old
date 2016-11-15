$(document).ready(function() {

  $('#CurrentAge').text(CurrentAge('1989-12-27'));
  $('.CurrentYear').text(new Date().getFullYear());

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
