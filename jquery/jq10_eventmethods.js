// click() method

// double click() method

// hover() method

$(function () {

    $("button").hover(function () { // 모든 <button>요소에 hover 이벤트를 설정함. 이벤트 핸들러 x

        $("#text").append("마우스가 버튼 위로 진입하거나 빠져나갔어요!<br>");  //진입하거나 빠져나갈 때 

    });

});

//mousedown() method

//mouseenter() method

//mouseleave() method

//mousemove() method

///mouseout() method

//mouseover() method

//mouseup() method





// keypress() method

// input 요소에 키보드로 문자를 입력할 때마다 발생

$(function () {
    $("#key").on("keypress", function (event) {
        $("#str").html(event.type + " : " + event.which) //이벤트가 어디서 일어났는지 which 는 키보드의 어느 값인지
    })
})

//keydown() method //shift esc delete 추가
//keyup() method

$(function () {

    // 아이디가 "focus"인 요소에 focusin 이벤트를 설정함.

    $("#focus").on("focusin", function (event) {

        $(this).css("backgroundColor", "yellow"); //집중되었을때 css 값을 바꿈

    });

    // 아이디가 "focus"인 요소에 focusout 이벤트를 설정함.

    $("#focus").on("focusout", function (event) {

        $(this).css("backgroundColor", "white");

    });

});

// 그 외

// .change() change 이벤트와 이벤트 핸들러 연결 or change 이벤트 발생

// .select() select 이벤트와 이벤트 핸들러 연결 or select 이벤트 발생

// .submit() submit 이벤트와 이벤트 핸들러 연결 or submit 이벤트 발생