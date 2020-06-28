# JavaWeb
This is my personal learning repository which for my progress in Java programming.


## web概念概述
	* JavaWeb：
		*使用Java语言开发基于互联网的项目

	* 软件架构：
	   	1.C/S：Client/Server 客户端/服务器端
			* 如QQ
			* 优点：
			 		用户体验好
			* 缺点：
					开发、安装，部署，维护麻烦
		2.B/S：Browser/Server 浏览器/服务器端
			* 优点：
					开发、安装，部署，维护简单
			* 缺点：
					如果应用过大，用户体验不好
					对硬件要求较高


	* B/S架构：
		*资源分类
			1.静态资源：
				* 使用静态网页开发技术发布的资源
				* 特点：
					* 所有用户访问，得到的结果都是一样的。
					* 如HTML，CSS，JavaScript
					* 如果用户请求的是静态资源，那么服务器会直接将静态资源发送给服务器。浏览器中内置了静态资源的解析引擎，可以展示静态资源
			2.动态资源：
				* 使用动态资源及时发布的资源
				* 特点：
					* 所有用户访问得到的结果可能不一样。
					* 如jsp/servlet，php，asp...
			
			* 我们要学习动态资源前必须先学习静态资源
			* 静态资源三剑客：
				* HTML：用于搭建基础网页，展示页面内容
				* CSS：用于美化页面，布局页面
				* JavaScript：控制页面元素，让页面有一些动态的效果。


## HTML
	1. 概念：是最基础的网页开发语言
		* Hyper Text Markup Language 超文本标记语言
			* 超文本：
				* 使用超链接的方法，将各种不同空间的文字信息组织在一起的网状文本
			* 标记语言：
				* 由标签构成的语言，<标记名称>如html、xml
				* 标记语言不是编程语言
		
	2. 快速入门：
		* 语法：
			1. html文档后缀名 .html或htm
			2. 标签分为：
				1. 围堵标签：有开始和结束标签，如<html> </html>
				2. 自闭和标签：开始标签和结束标签在一起，如<br/>换行
			
			3. 标签可以嵌套：
				需要正确嵌套，不能你中有我，我中有你。
				错误：<a><b></a></b>
				正确：<a><b></b></a>	

			4. 在开始标签中可以定义属性，属性是由键值对构成，值需要需要引号引起来
			

	 HelloWorld：
		* 代码：
			<html>   
					<head> 
						<title>Helloworld</title> 
					</head>  
				<body>  
					<font color = 'gray'>Helloworld</font> </br>  	
					<font color = 'green'>Helloworld</font>  
				</body>  
			</html>  

	3. 标签学习：
		1. 文件标签：构成html最基本的标签
			* html：html文档的根标签
			* <head>：头标签，用于指定html文档的一些属性
			* <title>：标题标签
			* <body>：体标签
			* <!DOCTYPE html>:html中定义该文档是html文档
		2. 文本标签：和文本有关的标签
			* 注释：<!-- 注释内容 -->
			* <h1> to <h6>：标题标签
				* h1~h6：字体大小逐渐递减
			* <p>：段落标签
			* <br>：换行标签
			* <hr>：展示一条水平线
				* 属性：
					* color：颜色
					* width：宽度
					* size：高度
					* align：对齐方式
						* center：居中
						* left：左对齐
						* right：右对齐
			* <b>：字体加粗
			* <i>：斜体
			* <font>：字体标签(淘汰)
				* 属性：
					* color：颜色
					* size：大小
					* face：字体
				*属性定义：
					* color：
						1. 英文单词
						2. #值1值2值3
					* width：
						1. width = "20",单位是像素px
						2. %100，占总长的%比
			
		3. 图片标签
			* <img>： 展示图片，自闭和标签
				<img src="statics/1.moon.jpg" aria-atomic="true" alt="打不开此图片"/>
		4. 列表标签：
			* 有序列表<ol type="">
				* <li>：一行标签
				* type：可以通过type修改序号类型
			* 无序列表<ul>
				* <li>：一行标签
				* type：可以通过type修改点点的类型
		5. 链接标签：
			* <a>：定义一个超链接
				* 属性：
					* href：指定访问资源的URL
					* target：指定打开资源的方式
						* _self：默认值，在本页面打开
						* _blank：在一个新的页面打开


## CSS：页面美化和布局控制
	1. 概念：Cascading Style Sheets 层叠样式表
		* 层叠：多个样式可以作用在同一个html上，同时生效

	2. 好处：
		1. 功能强大
		2. 将内容展示与样式控制分离
			* 降低耦合度
			* 让分工协作更容易
			* 提高开发效率

	3. CSS的使用：CSS和HTML的结合
		1. 内联样式：
			* 在标签内使用style属性指定css代码，不推荐使用，耦合度高
		2. 内部样式：
			* 在head标签中，定义style标签，style标签体内容就是css代码
			* 如：
				* <style>
				        div{
				            color: gray;
				        }
				  </style>
					
				  <div>
				        Hello CSS!
				  </div>
		3. 外部样式：
			* 定义css文件
			* 在head标签里，定义link标签，引入外部的css文件
				* css文件：
					* div{
						    color: gold;
						}
				* html文件：
					* <link rel="stylesheet" href="../css/2.外部样式css.css">
					
					  <div>
				        HELLO CSS!
				      </div>

	4. css语法：
		* 格式：
			选择器 {
				属性名1:属性值1;
				属性名2:属性值2;
				...
			}
		* 选择器：筛选具有相似特征的元素
	5. 选择器：
		* 分类：
			1. 基础选择器：
				1. id选择器：选择具体的id属性值的元素，建议在一个html页面中的id值都唯一
					*语法：#id属性值{}
				2. 元素选择器：选择具有相同标签名称的元素
					* 语法：标签名称{}
					* 注意：id选择器的优先级高于元素选择器
				3. 类选择器：选择具有相同class属性值到的元素
					* 语法：	.class属性值{}
					* 注意：类选择器优先级高于元素选择器
			
			2. 扩展选择器
				1. 选择所有元素：
					* 语法：*{}
					
				2. 并集选择器：
					* 语法：选择器1，选择器2{}
					
				3. 子选择器：筛选选择器1元素下的选择器2元素
					* 语法：选择器1 选择器2{}
					
				4. 父选择器：筛选选择器2的父亲元素选择器1
					* 语法：	选择器1 > 选择器2{}
					
				5. 属性选择器：选择元素名称，属性名=属性值的元素
					* 语法：元素名称[属性名="属性值"]{}
					
				6. 伪类选择器：选择一些元素具有的状态
					* 语法：元素:状态{}
					* 如：<a>
						* 状态：
							* link：初始化状态
							* visited：被访问过的状态
							* active：正在访问的状态
							* hover：鼠标悬浮的状态

	6. 属性：
		1. 字体、文本：
			* font-size：字体大小
			* color：文本颜色
			* text-align：对齐方式
			* line-height：行高
		2. 背景：
			* background
		3. 边框：
			* border
		4. 尺寸：
			* width：宽度
			* height：高度
		5. 盒子模型：
			* margin：外边距
			* padding：内边距
				* 默认情况下内边距会影响整个盒子的大小：
					* 故使用box-sizing:border-box设置盒子的属性，保持width和height不变
			* float：浮动
				* left
				* right
		

## JavaScript
	* 概念：一门客户端脚本语言
		* 运行在客户端浏览器中，每一个浏览器都有JavaScript解析引擎
		* 脚本语言：不需要编译，直接就可以被浏览器解析
	
	* 功能：
		* 可以增强用户与html之间的交互过程，可以用来控制html元素，让页面有一些动态的效果，增强用户的体验
		
	* JavaScript发展史
		* JavaScript = ECMAScript + JavaScript(BOM + DOM)	
	
	* ECMAScript：客户端脚本语言的标准
		1. 基本语法：
			1. 与html集合的方式：
				1. 内部Js：
					* 定义<script>，标签体内容就是js代码
				2. 外部js：
					* 定义<script>，通过src属性引入外部js文件。
				

				* 注意：
					1. <script>可以定义在html页面的让任何地方，但是定义的位置会影响执行顺序
					2. <script>可以定义多个
			2. 注释
			3. 数据类型：
				1. 原始数据类型(基本数据类型)：
					1. number：数字，整数、小数、NaN
					2. string：字符串，无字符的概念，"ABC", "A", 'abc'
					3. boolean：true或false
					4. null：一个对象为空的占位符
					5. underfined：未被初始化的变量，默认赋值underfined
				2. 引用数据类型：对象
			4. 变量
				* 变量：一小块存储数据的内存空间
				* Java语言是强类型语言，而JavaScript是弱类型语言
					* 强类型：在开辟变量存储空间时，定义空间将采取存储的数据类型，且只能存储该类型。
					* 弱类型：在开辟变量存储空间时，不定义空间将采取存储的数据类型，可以存储任意类型。	
					
				* 语法：
					* var 变量名 = 初始化值
					
				* typeof运算符：
					* 注：typeof(null)运算后得到的是object	
			5. 运算符
				1. 一元运算符
				2. 算数运算符
				3. 赋值运算符
				4. 比较运算符
				5. 逻辑运算符
				6. 三元运算符
			6. 流程控制语句


## DOM简单学习
	* 功能：控制html文档的内容
	* 代码：获取页面标签对象Element
		* document.getElementById("id值")：通过标签的id获取标签的对象
	
	* 操作Element对象：
		1. 修改对象的属性值：
			1. 明确获取的对象是哪一个？
			2. 查看API文档，找其中有哪些属性可以设置
		2. 修改标签体内容：
			* 属性：innerHTML = "新内容"


## 事件简单学习
	* 功能：某些组件被执行了某些操作之后，触发某些代码的执行
	* 如何绑定事件：
		1. 通过js代码获取元素对象，指定事件属性，设置一个函数。


## BOM：浏览器对象模型
	1. 概念：Browser Object Model 浏览器对象模型
		* 将浏览器的各个组成部分封装成对象

	2. 组成：
		* Window：窗口对象
		* Navigator：浏览器对象
		* Screen：显示器屏幕对象
		* History：历史记录对象
			* 方法：
				1. back()		加载history列表中的前一个URL
				2. forward()	加载history列表中的下一个URL
				3. go()			加载history列表中的某个具体页面
			* 属性：
				1. length       返回当前窗口历史列表中的URL数量
		* Location：地址栏对象


## DOM：文档对象模型
	* 概念：Document Object Model 文档对象模型
		* 将标记语言文档的各个组成部分，封装成对象。可以使用这些对象，对标记语言文档进行CRUD的动态操作
	
	* W3C DOM 标准被分为3个不同的部分:
		* 核心 DOM 针对任何结构化文档的标准模型
			* Document：文档对象
			* Element：元素对象
			* Attribute：属性对象
			* Text：文本对象
			* Comment：注释对象

			* Node：节点对象，上述5个对象的父对象
		* XML DOM 针对XML文档的标注的模型
		* HTML DOM 针对HTML文档的标准模型

	* 核心DOM模型：
		* Document：文档对象
			* 方法：
				1. getElementById：根据Id属性值获取元素对象
				2. getElementByTagName：根据元素名称获取元素对象们，返回值为数组
				3. getElementByClassName：根据Class属性值获取元素对象们，返回值为数组
				4. getElementByName：根据name属性值获取元素对象们，返回值为数组
		* Element：元素对象
		* Node：节点对象，上述5个对象的父对象
			* 特点：所有DOM对象都可以被认为是一个节点
			* 方法：
				* CRUD DOM树：
					* appendChild()：向节点的字节点列表的结尾添加新的子节点
					* removeChild()：删除(并返回)当前节点的指定子节点
					* replaceChild()：用新节点替换一个子节点。
	* HTML DOM模型：
		1. 标签体的设置和内容获取：innerHTML
		2. 使用html元素对象的属性
		3. 控制元素样式
			1. 使用元素的style属性来设置
			2. 提前定义好类选择器的样式，通过元素的className属性来设置其class属性值。

	* 常见的事件：
		1. 点击事件：
			1. onclick：单击事件
			2. ondblclick：双击事件
		2. 焦点事件：
			1. onblur：失去焦点
				* 表单校验
			2. onfocus：获得焦点
		3. 加载事件：
			1. onload：一张页面或一幅图像完成加载
				* 用于等页面加载完成，再执行代码 window.onload = function(){...}
		4. 鼠标事件：
			1. onmousedown：按下鼠标
				* 定义方法时，定义一个形参，接收event对象，利用event对象的button属性值可以判断鼠标是哪个键被按下，0、1、2左中右
			2. onmouseup：松开鼠标
			3. onmousemove：移动鼠标
			4. onmouseover：鼠标移动到某元素上
			5. onmouseout：鼠标从元素上移开
		5. 键盘事件：
			1. onkeydown：某个键被按下
				* 同鼠标
			2. onkeyup：某个键被松开
			3. onkeypress：某个键被按下并松开
		6. 选择和改变：
			1. onchange：域的内容被改变
			2. onselect：文本被选中
		7. 表单事件：
			1. onsubmit：确认按钮被点击
				* 可以阻止表单的提交，函数返回false  
					1. onsubmit = function(){  ... return false}
					2. <form onclick="return checkform();">
			2. onreset：重置按钮被点击

## Bootstrap
	1. 概念：一个前端开发框架
		* 框架：一个半成品软件，开发人员在其上可以简化代码
		* test
		* test