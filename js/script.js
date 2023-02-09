jQuery(document).ready(function ($) {
  /*------------------------------------*\
    COUNTER
  \*------------------------------------*/
  $("#cnt").countdown("2018/10/01", function (event) {
    $(this).find(".months .figure").text(event.strftime("%-m"));
    $(this).find(".days .figure").text(event.strftime("%-n"));
    $(this).find(".hours .figure").text(event.strftime("%-H"));
    $(this).find(".minutes .figure").text(event.strftime("%-M"));
    $(this).find(".seconds .figure").text(event.strftime("%-S"));
    DrawCirc("cnt-canv-months", "months", event.offset.months);
    DrawCirc("cnt-canv-days", "days", event.offset.daysToMonth);
    DrawCirc("cnt-canv-hours", "hours", event.offset.hours);
    DrawCirc("cnt-canv-minutes", "minutes", event.offset.minutes);
    DrawCirc("cnt-canv-seconds", "seconds", event.offset.seconds);
  });
  /*------------------------------------*\
    *COUNTER*
  \*------------------------------------*/

  /*------------------------------------*\
    HALF-CIRCLE
  \*------------------------------------*/
  function DrawCirc(id, type, value) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 50;
    switch (type) {
      case "months":
        var totalMonths = 12;
        var startAngle = -(0.5 * Math.PI);
        var endAngle =
          -(((2 * Math.PI) / totalMonths) * (totalMonths - value)) -
          0.5 * Math.PI;
        break;
      case "days":
        var totalDays = 30;
        var startAngle = -(0.5 * Math.PI);
        var endAngle =
          -(((2 * Math.PI) / totalDays) * (totalDays - value)) - 0.5 * Math.PI;
        break;
      case "hours":
        var totalHours = 24;
        var startAngle = -(0.5 * Math.PI);
        var endAngle =
          -(((2 * Math.PI) / totalHours) * (totalHours - value)) -
          0.5 * Math.PI;
        break;
      case "minutes":
        var totalMinutes = 60;
        var startAngle = -(0.5 * Math.PI);
        var endAngle =
          -(((2 * Math.PI) / totalMinutes) * (totalMinutes - value)) -
          0.5 * Math.PI;
        break;
      case "seconds":
        var totalSeconds = 60;
        var startAngle = -(0.5 * Math.PI);
        var endAngle =
          -(((2 * Math.PI) / totalSeconds) * (totalSeconds - value)) -
          0.5 * Math.PI;
        break;
    }
    var counterClockwise = false;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 3;

    // line color
    context.strokeStyle = "#998e80";
    context.stroke();
  }
  /*------------------------------------*\
    *HALF-CIRCLE*
  \*------------------------------------*/

  /*------------------------------------*\
    FORM STYLER
  \*------------------------------------*/
  $("#inviting-wrp input[type='radio']").styler();

  $("#inviting-wrp input[type='radio']").change(function () {
    var n = $(this).attr("name");
    var nm = $("input:radio[name=" + n + "]")
      .not(":checked")
      .closest("label.checked");

    if (nm) nm.removeClass("checked");

    $(this).closest("label").addClass("checked");
  });

  $("#quest-wrp input[type='radio']").styler();
  $("#quest-wrp input[type='checkbox']").styler();

  $("#quest-wrp input[type='radio']").change(function () {
    var n = $(this).attr("name");
    var nm = $("input:radio[name=" + n + "]")
      .not(":checked")
      .closest("label.checked");

    if (nm) nm.removeClass("checked");

    $(this).closest("label").addClass("checked");
  });

  $("#quest-wrp input[type='checkbox'").change(function () {
    if ($(this).is(":checked")) {
      $(this).closest("label").addClass("checked");
    } else {
      $(this).closest("label").removeClass("checked");
    }
  });
  /*------------------------------------*\
    *FORM STYLER*
  \*------------------------------------*/

  /*------------------------------------*\
    BX SLIDER
  \*------------------------------------*/
  $(".gallery-slider").bxSlider({
    slideWidth: 940,
    prevSelector: ".gallery-prev",
    nextSelector: ".gallery-next",
  });
  /*------------------------------------*\
    *BX SLIDER*
  \*------------------------------------*/

  /*------------------------------------*\
    *BX SLIDER*
  \*------------------------------------*/
  // DG.then(function () {
  //   map = DG.map("map", {
  //     center: [57.147229, 65.553167],
  //     zoom: 14,
  //     scrollWheelZoom: false,
  //   });
  //   mapCenter = map.getCenter();
  //   var myIcon1 = DG.icon({
  //     iconUrl: "images/marker1.png",
  //     iconRetinaUrl: "images/marker1.png",
  //     iconSize: [52, 80],
  //     iconAnchor: [27, 80],
  //     popupAnchor: [0, 0],
  //   });
  //   var myIcon2 = DG.icon({
  //     iconUrl: "images/marker2.png",
  //     iconRetinaUrl: "images/marker2.png",
  //     iconSize: [52, 80],
  //     iconAnchor: [27, 80],
  //     popupAnchor: [0, 0],
  //   });

  //   DG.marker([57.147229, 65.553167], { icon: myIcon1 })
  //     .addTo(map)
  //     .bindPopup(
  //       '<p style="text-align:center;">ЗАГС</p> <p style="text-align:center;">Жемчужный зал</p>'
  //     );
  //   DG.marker([57.142492, 65.55998], { icon: myIcon2 })
  //     .addTo(map)
  //     .bindPopup('Ресторан<br /> <p style="text-align:center;">ЧАЙКА</p>');
  // });
  /*------------------------------------*\
    *BX SLIDER*
  \*------------------------------------*/

  /*------------------------------------*\
    SMOOTH SCROLL
  \*------------------------------------*/
  $("a.topLink").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 500,
        easing: "swing",
      }
    );
    return false;
  });
  /*------------------------------------*\
    *SMOOTH SCROLL*
  \*------------------------------------*/

  /*------------------------------------*\
    OTHER
  \*------------------------------------*/
  $(window).scroll(function () {
    $(".wrp").each(function () {
      var y = $(document).scrollTop();
      var t = $(this).offset().top;
      if (y > t - 300) {
        $(".menu-wrp").removeClass("active");
        $(this).find(".menu-wrp").addClass("active");
      } else {
        // $(this).fadeOut();
      }
    });
  });
  /*------------------------------------*\
    *OTHER*
  \*------------------------------------*/
});
