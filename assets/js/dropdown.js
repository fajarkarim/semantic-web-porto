$(document).ready(function(){
  $(".dropdown").hover(
    function() {
        $('.dropdown-menu', this).show();
        $(this).toggleClass('open');
    },
    function() {
        $('.dropdown-menu', this).hide();
        $(this).toggleClass('open');
    }
  );

  $(".tabbable > ul > li > a").hover(function () {
    $(this).tab('show')
  });
});
