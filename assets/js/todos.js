
// Check off specific todos by clicking
$("ul").on("click","li",function(){
  $(this).toggleClass("complete")
});

$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
      var toDo = $(this).val();
      $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+toDo+"</li>");
      $(this).val("");
  }
});

$(".fa-plus-square").on("click",function(){
  $("input[type='text']").fadeToggle();
});
