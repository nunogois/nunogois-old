$(document).ready(function() {

  $('#CurrentAge').text(CurrentAge('1989-12-27'));
  $('.CurrentYear').text(new Date().getFullYear());

  $(".page-scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    $(this).blur();
  });

  HideAntiBotInput();
  TextAreaAutoSize();
  
  EasterEgg();
  
  NewWebsiteNotification();

});

function NewWebsiteNotification() {
 toastr.info("Click here to go to my <b>new</b> website!", "New website available!", {
   "closeButton": true, 
   "extendedTimeOut": 0, 
   "timeOut": 0, 
   "onclick": function() { 
     window.location.href='https://www.nunogois.com' 
   }
 }); 
}

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

function HideAntiBotInput()
{
  $('#name').hide();
}

function TextAreaAutoSize() {
  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;resize:none;');
  }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
}

function EasterEgg() {
  console.log("                                                                  \n       `'##+.                                                     \n     '@@@@@@@@+                                  `@@@@@@@@@@@@@@@ \n    @@@@@@@@@@@@                                 `@@@@@@@@@@@@@@@ \n   @@@@@@@@@@@@@@`                               `@@@@@@@@@@@@@@@ \n  ;@@@@@@@@@@@@@@@.                              `@@@@@@@@@@@@@@@ \n  @@@@@@@@@@@@@@@@@,                             `@@@@@@@@@@@@@@@ \n .@@@@@@@@@@@@@@@@@@;                            `@@@@@@@@@@@@@@@ \n #@@@@@@@@@@@@@@@@@@@+                           `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@#                          `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@                         `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@                        `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@                       `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@`                     `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@`                    `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@:                   `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@'                  `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+                 `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@               `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`           `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.          `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@'@@@@@@@@@@@@@@@@@@@@@@:         `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@ :@@@@@@@@@@@@@@@@@@@@@@'        `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@  .@@@@@@@@@@@@@@@@@@@@@@#       `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@   `@@@@@@@@@@@@@@@@@@@@@@@      `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@     `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@    `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@   `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@        #@@@@@@@@@@@@@@@@@@@@@@` `@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@         +@@@@@@@@@@@@@@@@@@@@@@,`@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@          '@@@@@@@@@@@@@@@@@@@@@@;@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@           :@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@            .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@             `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                   +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                    ;@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                     ,@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                      `@@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                       `@@@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                         @@@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                          @@@@@@@@@@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@                           @@@@@@@@@@@@@@@@@@@@@# \n @@@@@@@@@@@@@@@                            #@@@@@@@@@@@@@@@@@@@; \n @@@@@@@@@@@@@@@                             +@@@@@@@@@@@@@@@@@@` \n @@@@@@@@@@@@@@@                              :@@@@@@@@@@@@@@@@@  \n @@@@@@@@@@@@@@@                               ,@@@@@@@@@@@@@@@.  \n @@@@@@@@@@@@@@@                                .@@@@@@@@@@@@@@   \n @@@@@@@@@@@@@@@                                  @@@@@@@@@@@@    ");
  console.log("%cNuno Góis - Software Developer", "background-color:black;color:white;font-size:26px;");
}


function ToggleEmail() {
  $('.contact').slideToggle( "slow" );
  $('.email-form').slideToggle( "slow" );
}

function SendEmail() {
  var name = $('#name').val(); // anti-bot input
  var contact_name = $('#contact_name').val(); // actual name input
  var contact_email = $('#contact_email').val(); // email input
  var contact_subject = $('#contact_subject').val(); // subject input
  var contact_message = $('#contact_message').val(); // message textarea

  if (name === "" & contact_name !== "" & contact_email !== "" & isEmail(contact_email) & contact_subject !== "" & contact_message !== "")
  {
    $('.btn-send').attr('disabled', true);
    $('#contact_name').attr('disabled', true);
    $('#contact_email').attr('disabled', true);
    $('#contact_subject').attr('disabled', true);
    $('#contact_message').attr('disabled', true);
    $('.btn-send').attr('onclick', false);

    $.ajax({
      type: 'POST',
      data: JSON.stringify({ name: name, contact_name: contact_name, contact_email: contact_email, contact_subject: contact_subject, contact_message: contact_message }),
      contentType: 'application/json',
      url: 'send',
      success: function(data) {
        toastr.success('Email sent sucessfully! Thank you for your message.', 'Nuno Góis');
        ToggleEmail();
      }
    });
  }
  else
  {
    toastr.error('Please fill all the required fields correctly.', 'Nuno Góis');
    $('.btn-send').attr('disabled', false);
  }
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
