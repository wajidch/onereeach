jQuery(document).ready(function($) {
  var steps = $(".getaccess--popup").find("section").length;
  $(".getaccess--popup")
    .find("h3")
    .append("<span> out of " + steps + "</span>");

  $(".getaccess--popup").hide();

  function overlay() {
    $("body").append("<div class='overlay_popup'></div>");
    return;
  }

  $(".cta-button").click(function(e) {
    e.preventDefault();
    $(".getaccess--popup").fadeIn();
    overlay();
  });

  $(".cta_periodic").click(function() {
    $(".periodic--popup").fadeIn();
    overlay();
  });

  $(".cta_contact").click(function() {
    $(".contact--popup").fadeIn();
    overlay();
  });

  var wpcf7Elm = document.querySelector(".wpcf7");

  document.addEventListener(
    "wpcf7mailsent",
    function(event) {
      if (event.detail.contactFormId == "6315") {
        window.open(
          "/wp-content/uploads/2019/07/periodic-botify.pdf",
          "_blank"
        );
      }
    },
    false
  );

  wpcf7Elm.addEventListener(
    "wpcf7submit",
    function(event) {
      $(".popup_thankyou").fadeIn();
      $(".popup_form").fadeOut();
    },
    false
  );

  $("video").attr("webkit-playsinline", "");

  $(".close").click(function() {
    $(".popup_form").fadeOut();
    $(".popup_thankyou").fadeOut();
    $(".overlay_popup").fadeOut();
  });

  $(".button-back").unwrap();
  $(".wpcf7-submit").unwrap();

  // Init Carousel on Homepage

  var carousel = $(".o-carousel__main");

  if (carousel.length > 0) {
    var or_carousel = new Siema({
      selector: ".o-carousel__main",
      duration: 500,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 50,
      loop: true,
      rtl: false
    });

    var prev = $(".o-carousel__nav-button_prev");
    var next = $(".o-carousel__nav-button_next");

    prev.click(function() {
      or_carousel.prev();
    });

    next.click(function() {
      or_carousel.next();
    });
  }
});
