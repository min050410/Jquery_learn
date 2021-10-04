// 1 - show 메소드

$(function () {
    $("showBtn").on("click", function () {
        $("#text").show();  //나타나게 하기
    })
})

$(function () {
    $("showBtn").on("click", function () {
        $("#text").hide();  //사라지게 하기
    })
})

show(2000) // 2초에 걸쳐 나타나게 함

hide("fast")  // 빠르게 숨김

toggle("slow") //숨기고 나타나는것 토글

// 2 -  fadein 메소드

$(function () {
    $("fadeBtn").on("click", function () {
        $("#text").fadeIn("slow"); //천천히 나타나게 함 
    })
})
//fadeOut(천천히 사라지게 함)
//, fadeToggle이 존재

// 3 - slide 메소드

$(function () {
    $("#side").slideUp(); //서서히 올라오면서 사라지는 효과
    $("#side").slideDown(); //서서히 내려오면서 나타나는 효과
    $("#side").slideToggle(); //없으면 나타나고 있으면 사라지는 효과
})

// 4 - 제어 메소드
$(function () {
    $("#side").slideUp().delay(500); //0.5초동안 딜레이
    $("#side").slideDown().stop(); //이벤트 멈춰!!!
    $("#side").slideToggle().finish(); //이벤트 멈추고 초기화
})
