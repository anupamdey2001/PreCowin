$(window).on('load', function () {
  $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function () {
  $("button").click(function () {
    var pin = $('#pin').val();
    var today = $('#date').val();
    if (pin === "" || pin === undefined && today === "" || today === undefined) {
      alert("Please Enter your pin code");
    }
    $.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pin + "&date=" + today, function (data, status) {
      let resultData = [];
      resultData = data.sessions;
      if (resultData) {
        for (var i = 0; i < resultData.length; i++) {
          $('#sessions').append(
            '<b><tr><td>'
            + (i + 1) +
            '</td><td>'
            + resultData[i].name +
            '</td><td>'
            + resultData[i].block_name +
            '</td><td>'
            + resultData[i].vaccine +
            '</td><td>'
            + resultData[i].available_capacity_dose1 +
            '</td><td>'
            + resultData[i].available_capacity_dose2 +
            '</td><td>'
            + resultData[i].slots +
            '</td></tr></b>'
          );
        }
      }
    });
  });
});