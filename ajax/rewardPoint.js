var url = "https://bssm.meistergo.co.kr/ss/ss_a40j.php"
var ref = "https://bssm.meistergo.co.kr/ss/?pg=a40"
var cookie = "PHPSESSID=d0532dfa77509fb6326d3802af26d5d9"
var type = "application/x-www-form-urlencoded; charset=UTF-8"
$(document).ready(function () {
    $.ajax({
        type: "post",
        url: url,
        dataType: "jsonP",
        Referer: ref,
        // setCookies: cookie,
        crossDomain: true, // 추가 
        cache: false, 
        ContentType: type,
        
        xhrFields: { withCredentials: true },
        success: function (data) {
            // data = JSON.parse(data)
            console.log(data);
            $("#f1").html(data)

        },
        error: function (request, status, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }


    })

})


// 1. 출처가 다른 리소스가 또 다른 출처의 리소스와 상호작용 하는 것은 SOP 규정으로 금지되어있다.

// 2. 로컬 환경에서는 리소스의 출처가 NULL로 규정되기 때문에 Ajax 등으로 불러오는 순간 SOP에 걸린다.