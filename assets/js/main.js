jQuery(function($) {

  $(document).ready(function() {

    $(".post-image").click(function(event) {

      $(this).parent().find(".more-info").css("display", "block");

    });

    $(".more-info").click(function() {

      $(this).css("display", "none");

    });

    $(".close").click(function() {

      $(this).parent().parent().parent().css("display", "none");

    });

  });

});
