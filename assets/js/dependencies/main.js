$( "#js-signup-submit" ).click(function() {
  $( "#js-signup" )[0].submit();
});

$( "#js-login-submit" ).click(function() {
  $( "#js-login" )[0].submit();
});

$( ".js-status-change" ).click(function(e) {
  var prescriptionId = $(this).attr('data-prescriptionAccessId');
  var newStatus = $(this).attr('data-status')
  $.ajax({
    type: 'PUT',
    url: '/change-prescription-access-status/' + prescriptionId,
    data: {
      status: newStatus
    },
    success: function cb(data) {
      location.reload();
    }
  });
});
$( "#js-get-access" ).click(function(e) {
  var prescriptionId = $(this).attr('data-prescriptionId');
  var newStatus = $(this).attr('data-status')
  $.ajax({
    type: 'POST',
    url: '/get-prescription-access/' + prescriptionId,
    data: {},
    success: function cb(data) {
      console.log(data);
    }
  });
});
