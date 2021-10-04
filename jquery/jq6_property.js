// property
$(document).ready(function (){

})
// .css methods
$("p").css("fontSize", "25px");

//else

$("p").css({
    fontSize : "25px",
    backgroundColor: "yellow",
})
// js 에서는 font-size 를 -를 제거하고 fontSize 로 바꿈
// 아니 왜 이렇게 camal case 로 불편하게 바꾸는 거냐고... 뭐 아무튼

//attr 메소드
//ex ) 
$("#word").attr("title","즐거운 제이쿼리 수업이에요 ~ ")

//removeattr 메소드
//ex )
$("#word").removeAttr("title")

$("input[value='jquery]").prop({
    checked: true  // 해당요소의 checked 프로퍼티를 ture 값으로 설정함 
})