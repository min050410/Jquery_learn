// event delegation

// 1 - preventDefault

$(function() {
    $("ul a").on("click", function(event){  // ul 밑에 a  선택
            event.preventDefault();  // 이벤트를 막는 prevent
            $("#text").append("이링크는 동작하지 않습니다")
    })  
})
// 이 방법은 현재 존재하는 a 요소에만 연결

// 2 - 이벤트 핸들링


$(function() {
    $("ul").on("click" ,"a", function(event){  // ul 밑에 a를 이렇게 선택할 수도 있음 // js 와 이벤트 핸들러 연결하는 과정
            event.preventDefault();  // 이벤트를 막는 prevent
            $("#text").append("이링크는 동작하지 않습니다")
    })  
})

// 이 방법은 나중에 추가되는 자손 요소까지 모두 자동으로 연결

