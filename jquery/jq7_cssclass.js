//class 추가 및 제거
$(document).ready(function () {
    css1();
    css2();
})

//addClass 메소드
function css1() {
    $(".btn").on("click", function () {
        $("#first, #third").addClass("lined")
        // $("#append").find("li").toggleClass("lined")  //토글한건 remove 안됨 
    })
}

//remove class 메소드
function css2() {
    $(".btn3").on("click", function () {
        $("#first, #third").removeClass("lined")
    })
}
// ToggleClass() 클래스가 없으면, 추가 클래스가 있으면 제거