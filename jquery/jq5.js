// filtering methods


$(document).ready(function () {
    $("#append").find("li").not(":odd").css({ "color": "blue" })  // li 를 찾고 odd 즉 홀수 번째가 아닌것 짝수번째 선택 
    $("#append").find("li").filter(":odd").css({ "color": "red" })  // filter == not 의 반대
    has()
});

// has 메소드

function has() {
    if ($("#append").children().is("li")) { // 클래스의 하위 요소들 중 li 요소를 하나라도 가지고 있으면
        // $("#append").has("li").css({ "border-bottom": "1px solid" })  // #append가 li요소를 가지고 있으면 #apppend의 css값 바꾸기
        $("#append").find("li").css({ "border-bottom": "1px solid" })  
    }

}

