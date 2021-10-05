birth = "20050211"

url = "https://m.search.naver.com/p/csearch/dcontent/external_api/json_todayunse_v2.naver?_callback=window.__jindo2_callback._fortune_my_0&gender=m&birth=" + birth + "&solarCal=solar&time="

ref = "https://search.naver.com/search.naver?where=nexearch&sm=tab_bck&ie=utf8&ug_cid=mwk&query=%EC%83%9D%EB%85%84%EC%9B%94%EC%9D%BC%20%EC%9A%B4%EC%84%B8"
$(function () {
    $.ajax({
        type: "get",
        url: url,
        dataType: "text",
        // path : path,
        referer: ref,
        //유저별로 referer는 다를수도 있음 + referer 동일
        // userAgent :  
        headers: {
            "User-agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36",
            "referer": ref,
        },
        success: function (data) {
            var database = data
            console.log("파싱이 완료")
            console.log(data)
            // database = database.slice(42, database.length - 2)
            // // console.log(database);
            // var parse = JSON.parse(database)
            // // console.log(parse["mealServiceDietInfo"][1]["row"][0]["DDISH_NM"]);
            // inner(parse["mealServiceDietInfo"][1]["row"][1]["DDISH_NM"]);
        }
    })
})