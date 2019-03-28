jQuery(function($) {

  $(document).ready(function() {

    $(".post").click(function() {

      $(this).find(".more-info").removeClass("hidden");

    });

  });

});
