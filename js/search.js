/**
 * @file
 * Controls the search form.
 */
(function ($, Drupal) {
  Drupal.behaviors.mixologySearch = {
    attach : function(context, settings) {
      if (context == document) {
        $('.form-search-expander').click(function(){
          $(this).siblings('.form-search-main').show(200);
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