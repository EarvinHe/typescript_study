// object表示一个对象
let a: object;
a = {};
a = function(){

};

// {}用来指定对象中可以包含哪些属性
/* 加上问号，表示属性可选 */
let b:{name:string,age?:number};

// 必须得含有name属性，不允许直接b={}
b={name:''}
console.log(b)
// 最常用以下方式，{[propName:string]:any},表示在对象c中定义了任意类型的属性
let c : {[propName : string] : any};
c = {name:'何旺'}   //此时不报错，c为空对象
console.log(c)
//函数对象
/* 语法：（形参：类型。。。）=>返回值 */
let d: (a:number,b:number)=>number 

/* 数组：
string[] 表示字符串数组
*/
//number[] 表示数值数组
let f : number[];
let g : Array<number>;
g = [1,2,3]

// ts新增类型
//元组：
let h : [string,string];
h=['hello','1']


export {}