/**
 * @file
 * Controls the search form.
 */
(function ($, Drupal) {
  Drupal.behaviors.mixologySearch = {
    attach : function(context, settings) {
      if (context == document) {
        $('.form-search-expander').click(function(){
          var width = $('.header--top').width();
          if (width > 400) {
            width = 400;
          }
          $(this).siblings('.form-search-main').css('width', width).css('top', '40px').show(200);
        });
        $(window).scroll(function(){
          $('.form-search-expander').siblings('.form-search-main').hide();
        });
        $('.form-search-main-close').click(function(){
          $(this).closest('.form-search-main').hide(200);
        });
      }
    }
  };
})(jQuery, Drupal);