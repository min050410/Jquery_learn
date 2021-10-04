$(document).ready(function () {
    btn_onclick()
    btn_onclick2()
    btn_onclick3()
});

// append 메소드
function btn_onclick() {
    $(".btn").on("click", function () {
        $("#append").append("<li>이것을 추가햇습니다! </li>");
    })
}

// clone 메소드
function btn_onclick2() {
    $(".btn2").on("click", function () {
        $("#append").find("li").eq(0).clone().appendTo("#append");
    })
}

// remove 메소드
function btn_onclick3() {
    $(".btn3").on("click", function () {
        $("#append").find("li").last().remove();
    })
}
