//ajax 메소드는 모든 jquery ajax method 중 가장 핵심이다

//ajax 메소드의 원형
//$.ajax(url주소, 옵션)

$.ajax({
    url: "/examples/media/request_ajax.php",
    data: { name: "홍길동"}, // http 요청과 함께 서버로 보낼 데이터
    method: "GET", // http 요청방식
    dataType: "json" //서버에서 보내줄 데이터의 타입

})

// 성공

.done(function(json){
    $("<h1>").text(json.title).appendTo("body");
// 이렇게 <h1> 을 선택자 자리에 써도 됨
})
.fail(function(xhr, status, errorThrown) {
    $("#text").html("오류가 발생했습니다.<br>")
    .append("오류명: "+ errorThrown + "<br>")
    .append("상태:" + status)
})

// 성공 실패와 관계없이 always() 메소드가 실행됨
.always(function(xhr, status){
    $("#text").html("요청이 완료되었습니다!");
})

// load method 선택한 요소에서 호출
$(function() {

    $("#requestBtn").on("click", function() {

        // URL 주소에 존재하는 HTML 코드에서 <li>요소를 읽은 후에 id가 "list"인 요소에 배치함.

        $("#list").load("/examples/tryit/htmlexample/jq_elementTraversing_etc_01.html li");
        // #list 에서 해당 http의 li들을 호출
    });

});
