/**
 * Created by yuqianyi on 2017/5/2.
 */
var async=require('async');
// var class1217=[{name:'文冠龙',age:999,delay:500},
//     {name:'李青',age:998,delay:200},
//     {name:'刁刁',age:997,delay:1000},
//     {name:'班长',age:996,delay:100},
//     {name:'于',age:995,delay:1000}];
var a=[1,2,3];
//map是并行的
//map的第一个参数是数组||对象||迭代
async.map(a,function (item,callback) {
    item=item+100;
    //map的第二个参数是对第一个参数中每一个元素进行的操作
    // callback对于第三个函数的回调,第一个参数是error,第二个参数是操作后数组||对象||迭代的每一个元素
    callback(null,item);
    //map的第三个参数是回调的函数
},function (error,results) {
    console.log('a:'+results);
});


//mapLimit和map类似,不同的是mapLimit有4个参数,参数1,3,4都和map一样,
// 第二个参数limit规定异步操作的最大数量



//mapSeries和map相似,只不过是逐个执行的




//mapValues 看起来和map的执行顺序一样,但是它输出的是obj对象,把整个元素都输出来
//并没有只返回value值
async.mapValues(class1217, function (file, key, callback) {
    // console.log(file);
}, function(err, result) {

});
//{ name: '文冠龙', age: 999, delay: 500 }
// { name: '李青', age: 998, delay: 200 }
// { name: '刁刁', age: 997, delay: 1000 }
// { name: '班长', age: 996, delay: 500 }
// { name: '于谦义', age: 995, delay: 1000 }


//mapValuesLimit
//和上面的功能一样,但是他只返回第二个参数,规定数量的元素,如果规定数量超过了原数组
//就只显示原数组的所有元素,不会有重复
async.mapValuesLimit(class1217,1, function (file, key, callback) {
    // console.log(file);
}, function(err, result) {

});


//mapValuesSeries顺序执行异步处理函数。
async.mapValuesSeries(class1217, function (item, callback) {
    var date = new Date();
    var time = date.getTime();
    console.log( item.name + time);
}, function done(error,results) {
    console.log(error,results);
});











