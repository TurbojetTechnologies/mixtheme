/**
 * @file
 * Handle the menu toggle.
 */
(function ($, Drupal) {
  Drupal.behaviors.mixologyMenuToggle = {
    attach : function(context, settings) {
      if (context == document) {
        $('#menu-toggle').click(function(){
          $(this).siblings('ul.menu').slideToggle();
        });
        $(window).resize(function(){
          $('#menu-toggle').siblings('ul.menu').hide();
        });
      }
    }
  };
})(jQuery, Drupal);