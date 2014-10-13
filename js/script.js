$(document).ready(function() {
  
  $('.carousel').carousel({
    interval: 5000
  });
  
  $( ".dropdown-mobile" ).click(function() {
    $( ".menu-mobile" ).toggleClass( "block" );
  });

  $( "a.userpic" ).click(function() {
    $( ".reg-wrapper" ).toggleClass( "block" );
  });
  
  $( ".closer" ).click(function() {
    $( ".reg-wrapper" ).removeClass( "block" );
  });

    $(".line span").on('click',function(){
      $(this).toggleClass( "chosen" );
      $(this).append($(".popup_small"));
      $( ".popup_small" ).show(100);
      var place = $(this).index();
      var line = $(this).parent().index();
      var price = function(){
          if (line>3) {
            return "60 грн.";
          }
          if (line<8) {
            return "40 грн.";
          } 
          else{
            return "30 грн.";
          }
        };
      var chosen_seat="<p class='chosen_seat'>";
      var closer_seat="<span class='closer_seat'>X</span></p>";
      $( "#ticket_picker" ).append( chosen_seat+'Ряд' +' '+ line +' , '+ 'місце' +' '+ place + closer_seat);

      $("#price_calc").text(price);

      $("#chosen_index" ).text( "Ряд" +' '+ line +' , '+ "місце" +' '+ place);
      $("#price").text(price);

      $(".closer_seat").on('click',function(){
      $(this).parent().remove();
      });
  });

  $("td>span").on('click',function(){
    $(this).append($(".ticket-popup"));
    $(this).unbind('click');
    $( ".ticket-popup" ).show(100);
  });

  $(".ticket-closer").click(function() {
    $( ".ticket-popup" ).hide(100);
    $( ".popup_small" ).hide(100);
  });


  $("#ticket_picker_open").click(function() {
    $(this).toggleClass("red");
    $(".ticket_place").toggleClass( "block" );
    $("#ticket-wrapper").toggleClass( "strict_radius" );
  });

});

$(document).ready(init);
function init(){
  $('#date').bind('change');
}
function init(){
  $('#film').bind('change');
}
function init(){
  $('#pay_type').bind('change');
}
 function init(){
  $('#film_time').bind('change');
 }

