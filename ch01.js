// var arr = [1, 2, 3, 4, 5];
// alert(arr.length);

// function get_members() {
//     return ['egoing', 'k8805', 'sorialgi'];

// }
// members = get_members();

// for (i = 0; i < members.length; i++) {
//     document.write(members[i].toUpperCase() + "<br />");
//     // document.write('<br />');
// }

// python append
// var li = ['a', 'b', 'c', 'd', 'e'];
// li.push('f');
// alert(li);

//unshift 는 push 의 반대
// var li = ['a', 'b', 'c', 'd', 'e'];
// li.unshift('z');
// alert(li);

// var li = ['a', 'b', 'c', 'd', 'e'];

// li.splice(2, 0, 'B');
// alert(li);

//shift 는 앞에서 삭제하는 개념

//pop은 뒤에서 삭제 

// var li = ['c', 'e', 'a', 'b', 'd'];
// li.sort();
// alert(li);

// var li = ['c', 'e', 'a', 'b', 'd'];
// li.reverse();
// alert(li);

// var grades = { 'egoing': 10, 'k8855': 6, 'sorialgi': 80 };
// for (key in grades) {
//     document.write("key :" + key + "value :" + grades[key])
// }

var grades = {
    'list': { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 },
    'show': function () {
        for (var name in this.list) {
            document.write(name + ":" + this.list[name] + "<br />");

        }
    }
};
grades.show();