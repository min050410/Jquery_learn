$("#request").click(function () {
    var params = {
        name: $("#name").val(),
        c1: $("#c1").val(),
        c2: $("#c2").val(),
        c3: $("#c3").val(),
    }

    $.ajax({
        type: "POST",
        url: "https://search.naver.com/search.naver?where=nexearch&sm=tab_bck&ie=utf8&ug_cid=mwk&query=%EC%83%9D%EB%85%84%EC%9B%94%EC%9D%BC%20%EC%9A%B4%EC%84%B8",
        data: params,
        success: function (res) {
            alert(res.code);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("통신 실패")
        }
    });

});