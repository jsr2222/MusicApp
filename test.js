// var {x = 3} = {x: undefined};
// console.log(x) // 3

// function f1([x, y, z]) { return [x,y,z] }
// // 若想要用 解构赋值 需要将参数写成对象或者数组的形式
// console.log(f1([1, 2, 3]));//[ 1, 2, 3 ]

// function f2(x, y, z) { return [x,y,z] }
// console.log(f2([1, 2, 3]));//[ [ 1, 2, 3 ], undefined, undefined ]

// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
//   };
//   let { id, status, data } = jsonData;
//   console.log(id, status, data);

// let A = true;
// let B = true
// let c = NaN;
// let d = 0;
// let e = -0;
// var f = null;
// var h = undefined;
// console.log(A === B);
// console.log(c === d);
// console.log(d === e);
// console.log(f === h);

// let a = [1,2,3];
// let b = [4,6];
// // concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
// console.log(a.concat(b));

// var ages = [4, 12, 16, 20];

// function checkAdult(age) {
//     return age >= document.getElementById("ageToCheck").value;
// }

// // find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.find(checkAdult);
// }


// var ages = [3, 10, 18, 20];

// function checkAdult(age) {
//     return age >= 18;
// }
// // findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1
// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
// }

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// var energy = fruits.join(fruits2);//Banana,Orange,Apple,Mango
// console.log(energy)

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// //在索引为2位置开始删除0个元素，同时添加"Lemon","Kiwi"
// fruits.splice(2,0,"Lemon","Kiwi");//Banana,Orange,Lemon,Kiwi,Apple,Mango

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();//Apple,Banana,Mango,Orange
// console.log(fruits)

// var numbers = [4, 9, 16, 25];
// function a(num,index,ind,indd) {
//     console.log(num);
//     console.log("---------------");
//     console.log(index);
//     console.log(ind);
//     console.log(indd);
// }
// numbers.forEach(a)
// var a = 0.1;
// var b = 0.2;
// console.log((a * 100 + b * 100) / 100);
// let c = (0.1 + 0.2).toFixed(1);
// console.log(c);

// const Err = async () => {
//     throw new Error(0);
// };
// const Obj = {
//     async A() {
//         try {
//             await Err();
//         } catch {
//             console.log('A');
//         }
//     },
//     async B() {
//         try {
//             Err();
//         } catch {
//             console.log('B');
//         }


//     },
//     async C() {
//         try {
//             return Err();
//         } catch {
//             console.log('C');
//         }
//     },
// };
// (async () => {
//     for (const key in Obj) {
//         try {
//             await Obj[key]();
//         } catch {
//             console.log('D');
//         }
//     }
// })();

// /**
//  * 编辑距离最小步数
//  *
//  * @param word1 字符串1
//  * @param word2 字符串2
//  * @return 步数
//  */
// public int minDistance(String word1, String word2) {
//     int n = word1.length();
//     int m = word2.length();
//     if (n * m == 0) {
//         return n + m;
//     }
//     int[][] d = new int[n + 1][m + 1];
//     for (int i = 0; i < n + 1; i++) {
//         d[i][0] = i;
//     }
//     for (int j = 0; j < m + 1; j++) {
//         d[0][j] = j;
//     }
//     for (int i = 1; i < n + 1; i++) {
//         for (int j = 1; j < m + 1; j++) {
//             int left = d[i - 1][j] + 1;
//             int down = d[i][j - 1] + 1;
//             int leftDown = d[i - 1][j - 1];
//             if (word1.charAt(i - 1) != word2.charAt(j - 1)) {
//                 leftDown += 1;
//             }
//             d[i][j] = Math.min(left, Math.min(down, leftDown));
//         }
//     }
//     return d[n][m];
// }

function fn() {
    let num = 10
    function fun() {
      console.log(num)
    }
    return fun
  }
  var f = fn()
  f()