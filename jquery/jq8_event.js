// .on methods 

// ex )

$(function () {
    $("button").on("mouseenter mouseleave", function () {
        $("#text").append("마우스가 버튼위로 진입하거나 빠져나갔어요!")
    })
})

$(function(){
    $("button").on({
        mouseenter: function(){
            $("#text").append("마우스가 버튼위로 진입했어여");
        },
        
        click: function(){
            $("#text").append("아야!");
        },

        mouseleave: function(){
            $("#text").append("마우스가 버튼위에서 나감");
        }
    });
})

// on 대신 one 을 쓸경우 한번밖에 이벤트 실행안함

//off 는 특정 이벤트와의 연결을 제거 on 처럼 씀