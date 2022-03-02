$(function(){
  
    $("button.hamburger").on("click", function(){
      $(this).toggleClass("is-active");
    });
  
  });

  // 點擊按鈕，選單縮放
$("button.hamburger").on("click", function(){
  $("nav.main_nav").slideToggle();
});