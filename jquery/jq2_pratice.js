// jq 조작하기
$(document).ready(function () {
    inner();
})
function inner() {
    var arr = $('p');
    // alert(arr.length);
    var result
    for (var i = 0; i < arr.length; i++) {
        if ($(arr[i]).text().endsWith('.')) { // 만약에 $(arr[i]) 의 텍스트가 . 으로 끝난다면
            result += $(arr[i]).text().replace('.', '') + ", "; 
        }
        else
            result += $(arr[i]).html() + ", "; 
    }
    console.log(result) // 굿굿
    
}