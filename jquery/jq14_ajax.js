// get method 
url = "/examples/media/request_ajax.php"

$.get(url, { species: "멍멍", name: "야옹", },
    function (data, status) {
        console.log(data + "<br>성공여부 :" + status)
    })

// get 방식 get( url , { 보낼것들 }, function(data))

// post 메소드도 동일

