$(document).ready(function() {
    css1();
});
function jq1(){
    $("p") // p 태그 선택
    $("*") // 전체 선택
    $("span") // span 태그 선택
    $("#content")  // id 명이 content 인 것 선택
    $("div p")  //div 밑에 요소가 p 인것들 선택
}
// []요소의 속성 선택
function jq2(){
    $("div[id ^= 'content-']")  //content-로 아이디가 시작하는 것 선택
    $("div[id $= 'content-']")  // content-로 아이디가 끝나는 것 선택
    $("input[name='한국]")  //name 이 정확히 한국인 것 선택
    $("input[name!='한국]")  //name 이 한국이 아닌 것 모두 선택
    $("input[name*='한국]")  //name 안에 한국이 포함되어 있는 것 모두 선택
    $("input[name~='한국]")  
    //이게 좀 헷갈리는데
    //class 속성값에 "한국"이 단어로 들어간 모든 input 엘리먼트 선택
    //예: name="독도는 한국 땅"



}
//사용자 정의 선택자
function user(){
    $('t body tr')  //기본 선택자
    $('t body tr:odd')  // 이 엘리먼트중 홀수 번째 엘리먼트를 모두 선택
    $('t body tr:even')  // 이 엘리먼트중 짝수 번째 엘리먼트를 모두 선택
    $('t body tr:contains("문자열")') // "문자열"을 포함하는 앨리먼트 선택
    $('t body tr:gt(3)') // 3번째 요소 다음 요소들 선택 (4, 5, 6 ...)
    $('t body tr:lt(3)') // 3번째 요소 전 요소들 선택(1, 2)
}

