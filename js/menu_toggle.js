/**
 * @file
 * Handle the menu toggle.
 */
(function ($, Drupal) {
  Drupal.behaviors.mixologyMenuToggle = {
    attach : function(context, settings) {
      if (context == document) {
        $('#menu-toggle').click(function(){
          var width = $('body').width();
          var rightPosition = -(width - $('.region-top').width())/2;
          $(this).siblings('ul.menu').css('width', width).css('right', rightPosition).slideToggle();
        });
        $(window).resize(function(){
          $('#menu-toggle').siblings('ul.menu').hide();
        });
      }
    }
  };
})(jQuery, Drupal);