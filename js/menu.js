$(function () {
var time = 1000;
var offset = 75;

  $('.to_consultation_order').click(function (){
    $('html, body').animate({
      scrollTop: $('#consultation_order').offset().top - offset
    }, time);
  });

  $('.to_ny_bowl').click(function (){
    $('html, body').animate({
      scrollTop: $('#ny_bowl').offset().top - offset
    }, time);
  });

  $('.to_ready_sets').click(function (){
    $('html, body').animate({
      scrollTop: $('#ready_sets').offset().top - offset
    }, time);
  });

  $('.to_ny_bowl_order').click(function (){
    $('html, body').animate({
      scrollTop: $('#ny_bowl_order').offset().top - offset
    }, time);
  });

  $('.to_ready_sets_order').click(function (){
    $('html, body').animate({
      scrollTop: $('#ready_sets_order').offset().top - offset
    }, time);
  });

  $('.to_feedbacks').click(function (){
    $('html, body').animate({
      scrollTop: $('#feedbacks').offset().top - offset
    }, time);
  });

  $('.to_team').click(function (){
    $('html, body').animate({
      scrollTop: $('#team').offset().top - 50
    }, time);
  });

  $('.to_contacts').click(function (){
    $('html, body').animate({
      scrollTop: $('#contacts').offset().top - offset
    }, time);
  });

  $('.to_new_year_cards').click(function (){
    $('html, body').animate({
      scrollTop: $('#new_year_cards').offset().top - offset
    }, time);
  });

  $('.to_decor_set').click(function (){
    $('html, body').animate({
      scrollTop: $('#decor_set').offset().top - offset
    }, time);
  });

  $('.to_top').click(function (){
    $('html, body').animate({
      scrollTop: $('#top').offset().top - offset
    }, time);
  });

  $('.to_contacts').click(function (){
    $('html, body').animate({
      scrollTop: $('#contacts').offset().top - 50
    }, time);
  });
});