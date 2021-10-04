url = "https://open.neis.go.kr/hub/mealServiceDietInfo?callback=jQuery331005737853503659074_1633351969554&KEY=a392868da79e455189e5813ed97b5b8e&Type=json&pIndex=1&pSize=1000&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MMEAL_SC_CODE=2&MLSV_FROM_YMD=20210926&MLSV_TO_YMD=20211106&_=1633351969555"

$(function () {
    $.ajax({

        type: 'get',
        url: url,
        dataType: 'text',
        success: function (data) {
            var database = data
            // console.log("파싱이 완료")
            // console.log(data)
            database = database.slice(42, database.length - 2)
            // console.log(database);
            var parse = JSON.parse(database)
            console.log(parse["mealServiceDietInfo"][1]["row"][0]["DDISH_NM"]);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        },
    });
});

