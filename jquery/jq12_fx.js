// fast	    200
// normal	400
// slow	    600
$(function(){
    $("#text").hide("fast") //여기있는 fast 값이 기본 200
})

//값을 다르게 설정 가능

jQeury.fx.speeds	//밀리초에 해당하는 "slow", "fast" 등의 값을 가지고 이펙트 효과의 속도를 나타냄.
jQeury.fx.interval	//이펙트 효과가 보여지는 동안의 초당 프레임 수를 나타냄.
jQeury.fx.off	//모든 이펙트 효과를 사용할 수 없도록 비활성화시킴.

//ex )

jQeury.fx.speeds.fast = 200 //-> fast 값을 200으로 조정

jQuery.fx.off = true; // jQuery.fx 객체의 off 프로퍼티를 true로 설정함. 모든 이벤트가 꺼짐

jQuery.fx.interval = 20 //프레임수를 20으로 올림 기본은 13