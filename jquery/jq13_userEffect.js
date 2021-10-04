// $(선택자).animate(프로퍼티[,지속시간][,시간당속도함수][,콜백함수]);

// 사용자가 직접 지정하여 이펙트 사용 가능

// ex )

$(function () {

    $("#animateBtn").on("click", function () {

        $("#divBox").animate({

            height: "toggle" // CSS height 속성값을 미리 정의된 "toggle"로 설정함.
            // 이렇게 하나만 써도 됨
        });

    });

});

$(function () {

    $("#animateBtn").on("click", function () {

        $("#divBox").animate(    // id가 "divBox"인 요소를

            {

                left: "+=100",   // 오른쪽으로 100픽셀 이동하고,
                //프로퍼티

                opacity: 0.2     // 투명도를 0.2로 변경함.
                //프로퍼티

            }, 500, function () { // 0.5초에 걸쳐서 이펙트 효과가 진행됨.
                //지속시간 // 콜백함수

                $("#text").html("사용자 정의 이펙트가 실행됐어요!");

            }

        );

    });
});
