// Плавная прокрутка при нажатие на якорь
$(document).ready(function() {
  $("a[href*='#']").click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
          .animate({ scrollTop: targetOffset }, 1000);
        return false;
      }
    }
  });
});

// Функция вызова логику (php) для отправки данных
function sent(elem) {
  var form = $(elem);
  var alertCheck = false;
  var data = form.serialize();

  $.ajax({
    data: data,
    url: '/php/post.php', // Заменить на C#
    type: 'post',
    dataType: 'text',
    success: function(result) {alertCheck = result;}
  });

  if (alertCheck) {
    alert('Massage sent');
    console.log('Massage sent');
  }
  else {
    alert('Message not sent');
    console.log('Message not sent');
  }
};

