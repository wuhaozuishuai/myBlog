---
title: 【js基础】JavaScript中this指向
author: 'WH'
date: 2020-10-26
sidebar: 'auto'
categories:
 - frontEnd
tags:
 - js this

---


@[TOC](JavaScript this指向问题)

# 说在之前

这是我第一次尝试用博客的方式记录学习。其中有借鉴其他大牛的博客之类的。如有错误，欢迎指正讨论。话不多说，开始正文。


CSDN链接：[https://blog.csdn.net/qq_43457564/article/details/107736487](https://blog.csdn.net/qq_43457564/article/details/107736487)  
##  this是什么
在JavaScript中，简而言之**this**就是指函数运行的时的环境。**this**的加入使变量的作用域更加的灵活，也就是所谓的动态作用域。

## 全局下的this指向
我们在全局环境下直接输出==this==,会得到一个对象**Window**（浏览器当前窗口，BOM对象）
```javascript
// 全局环境下直接输出
console.log(this);//Window
```
## 事件调用下的this指向
简单来说，在事件调用时，==this==属于谁调用就指向谁。直接看示例。
1.普通函数中
     我们定义一个函数，然后直接调用。
     这个时候也会输出window，以为其实test()是被window进行调用，全局环境下window可以省略而且。这里注意一点，这样的写法在==严格模式==下会输出==undefined==
```javascript
// 事件调用下的this指向

function test(){
				console.log(this)
			}
			test()//Window  严格模式下Undefined
```


2.绑定事件中
```javascript
//HTML
<button class='btn1'>1</button>

//JavaScript
// 事件调用下的this指向
let btn1  =	    document.querySelector('.btn1’) 
btn1.onclick  =function(){
				console.log(this)//会输出btn1这个对象
				}
```
在这个时候，函数就是由btn1点击进行调用，所以**this**指向这个对象。一个对象可能不容易看出来。我们新增两个按钮，并将函数进行封装。
```javascript
//HTML
<button class='btn1'>1</button>
<button class='btn2'>2</button>
<button class='btn3'>3</button>
//JavaScript
// 事件调用下的this指向
	let btn1 = document.querySelector('.btn1');
	let btn2 = document.querySelector('.btn2');
	let btn3= document.querySelector('.btn3');
	btn1.onclick  =test
	btn2.onclick  =test
	btn3.onclick  =test
	function test(){
		console.log(this)
	}
```
这个时候，我们就会发现，==**this**始终指向调用它的那个对象。==
## 对象中函数的this指向
在JavaScript中，我们往往会将函数写到对象中以节省开辟的空间，就像这个样子
```javascript

// 对象中函数的this指向
var obj  ={
				name:'一个object',
				constructor:function(){
					console.log(this)
				}
			}
```
这个时候我们使用obj和window分别对它进行调用.会发现他们的this都会指向obj这个对象
```javascript
obj.constructor();
window.obj.constructor();
```
![](https://img-blog.csdnimg.cn/20200801221528928.png)
这个时候就得再引入一个概念，如果一个函数被多级对象调用，那么**this**只会指向调用的最后一级，也就是函数的上一级。为了加深这个概念，我们再看一个例子。
```javascript
var obj  ={
				name:'一个object',
				constructor:{
					title:"看我",
					test:function(){
						console.log(this)
					}
				}
			}
			obj.constructor.test()
			window.obj.constructor.test()
```
![](https://img-blog.csdnimg.cn/2020080122205020.png)
现在就能明确的知道多级调用时**this**指向上一级。
到这里很多童鞋就会想到一个问题。以下这种情况下**this**会指向什么。
```javascript
	var obj  ={
				name:'一个object',
				constructor:{
					title:"看我",
					test:function(){
					console.log(this);
				}
				}
			}
			let objC = obj.constructor.test
			objC()
```
这里this会指向**window**，这里有两个点需要注意下：
1.当**objC**被赋值obj.constructor.test时，他们其实指向的是同一个地址，但是有一个问题，就是，在他们申明定义的时候，**this**其实是并没有什么实际意义的，前面也有提到**this**是指函数运行的时的环境。也就是说，在函数没有调用前，**this**并没有实际意义，和申明没有任何关系。
2.此时objC()其实也是省略了**window**，所以其实真正意义上调用该函数的其实是window对象。

## 构造函数的this指向
敲重点啦，俗话说的好，这个世界上总有两个嫩头青。很明显，构造函数就是其中一个。
我们先定义一个函数
```javascript
function fn(){
				this.name ='张三',
				this.age ='永远18',
				console.log(this)
			}
			let obj = new fn()
```
这个时候this会指向一个对象，就像这样![](https://img-blog.csdnimg.cn/20200801231840363.png)
很神奇对吧。要搞懂这一点，我们就需要了解new的过程中到底发生了什么：
a. 创建一个空对象
b.设置新对象的constructor属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的prototype对象；
c. 使用新对象调用函数，函数中的this被指向新实例对象：
这样，就能知道**this**指向这个对象的原因了。这个时候会发现，**this**的值和实例化出来的obj的值是相同的。
好，我们由此深入一下，大胆猜想下下面123分别会输出什么。
```javascript
function fn(){
				this.age = 18;
			}
			fn.age = 20;
			fn.prototype.age= 30;
			fn.prototype.method =function(){
				console.log(this.age)
			}
			var prototype = fn.prototype;
			var method = prototype.method;
			
			
			new fn().method();//1.
			
			prototype.method()//2.
			
			method()//3.
```
**1.**首先，根据刚才提到了new一个对象后this会指向一个对象所以**new fn().method()**就是相当于{}.method()
也就是说，学过原型链应该知道，此时fn.prototype指向的也是new出来的对象，因此其实他们是同一个对象，所以此时==new fn().method()==输出==18==
2.同样依据原型链，这个时候我们知道fn.prototype是一个对象，特别注意这个时候的对象和刚才的对象==并不相同==，这个时候的对象拥有自己的属性age为==30==。
3.这一个前面仔细看过应该不难看出来。这里就相当于用一个变量接收了这个函数，method和prototype.method指向同一个地址但是调用不同。这里method()也就相当于window.method()，window上并没有age这个属相。所以输出==undefined==。

时间有限，后续会有补充。。
			如果对你有帮助的话，给个star吧。欢迎指正
## 2020-8-2更新
###  构造函数中this
	


前面提到构造函数中的**this**指向问题，在实际情况当中，我们可能会发现一个问题，当构造函数中存在return的值为一个对象时，情况可能就会出现变化了。
```javascript
function fn(){
				this.age = 18;
				return {
					age : 20
				};
			}
			var p  = new fn();
			console.log(p.age);//20
			
```
这个时候我们会发现输出来的值为20，也就是说，此时this指向的是return的对象。至此我们总结一下：在构造函数中，若没有return值或者return一个简单数据类型。this按照原规则。如果return一个对象，则指向该对象。
这里注意一下一个特殊的例子就是==null==，return null 时this还是会指向原对象。

###  箭头函数中this

	在实际情况中，会出现这样的问题。
```javascript
				let btn1 = document.querySelector('.btn1');
				btn1.onclick  =fn
			function fn(){
				function a(){
					console.log(this)//window
				}
				a()
				console.log(this)//调用的对象
			}
```
这里很多同学可能不明白为什么第一处会输出window。其实也很简单，这里面调用a()其实是window.a()。那么这个时候我们要想在子函数中访问到我们想要的**this**一般会用一个变量将其保存起来。但这样始终麻烦，ES6就推出了箭头函数来解决了这个问题。
```javascript
				let btn1 = document.querySelector('.btn1');
				btn1.onclick  =fn
			function fn(){
				let a = ()=>{
					console.log(this)//调用的对象
				}
				a()
				console.log(this)//调用的对象
			}
```
这样，我们就解决了这个问题。这是因为，箭头函数的this是在定义时就确定了，实际上就是上一层==作用域==的**this**，这里有一个坑，普通对象是不能形成独立的作用域的。		
