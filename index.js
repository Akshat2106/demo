
//call
// var obj={num:2};
// var addToThis=function(a){
//     return this.num+a;
// };
// console.log(addToThis.call(obj,3));

//apply
// var obj={num:2};
// var addToThis=function(a,b,c){
//     return this.num+a+b+c;
// };
// var arr=[1,2,3];
// console.log(addToThis.apply(obj,arr));

//bind
// var obj={num:2};
// var addToThis=function(a,b,c){
//     return this.num+a+b+c;
// };
// var arr=[1,2,3];
// var bound=addToThis.bind(obj);
// console.log(bound(1,2,3));

// let multiply =function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo=multiply.bind(this,2);
// multiplyByTwo(3);
// let multiplyByThree=multiply.bind(this,2);
// multiplyByThree(5);


let multiply = function (x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo=multiply(2);
multiplyByTwo(3);

let multiplyByThree=multiply(3);
multiplyByThree(5);;
