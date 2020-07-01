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
		* 好处：
			1. 定义了很多css样式和js插件，我们开发人员直接可以使用这些以达丰富的效果
			2. 响应式布局
				* 同一套页面可以兼容不同分辨率的设备
				
	2. 快速入门：
	<!DOCTYPE html>
	<html lang="zh-CN">
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
	    <title>Bootstrap 101 Template</title>
	
	    <!-- Bootstrap -->
	    <link href="css/bootstrap.min.css" rel="stylesheet">
	
	</head>
	<body>
	<h1>你好，世界！</h1>
	<!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
	<script src="js/jquery.js"></script>
	<!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
	<script src="js/bootstrap.min.js"></script>
	</body>
	</html>


## 响应式布局
	* 同一套页面可以兼容不同分辨率的设备
	* 实现：依赖于栅格系统：每一行平均分配成12个格子，可以指定元素占几个格子
	* 步骤：
		1. 定义容器：相当于之前的table
			* 容器分类：
				1. container：两边留白
				2. container-fluid：每一种设备都是100%宽度
		2. 定义行：相当于之前的tr  样式row
		3. 定义元素：指定该元素在不同的设备上，所占的格子数目，样式：col-设备代码-格子数目
			*设备代号：
				1. xs：超小屏幕 手机(<768px):col-xs-12
				2. sm：小屏幕 平板(>= 768px)
				3. md：中等屏幕 桌面显示器(>=992px)
				4. lg：大屏幕 大桌面显示器(>=1200px)
			
		* 注意：
			1. 一行中如果格子超过了12，则超出部分自动换行
			2. 栅格类属性可以向上兼容
			3. 如果真实设备小于了设置栅格类属性的设备代号的最小值，会一个元素占满一行


## Bootstrap的CSS样式和JS插件
	全局CSS样式：
		* 按钮：class="btn btn-default"
		* 图片：class="img-responsive"：图片在任意尺寸都占100%（响应式）
			* 形状可以修改
		* 表格：
			* table
			* table-bordered
			* table-hover
		* 表单：
			* 给表单项添加：class="form-control"



## XML
	1. 概念：Extensible Markup Language 可扩展标记语言
		* 可扩展：标签都是自定义的。

	2. 功能：存储数据
		1. 配置文件
		2. 在网络中传输
	
	3. XML和html的区别
		1. XML标签都是自定义的，html是预定义的
		2. xml标签语法严格，html标签语法松散
		3. xml是存储数据的，html是展示数据的

	4. 语法：
		* 基本语法：
			1. xml文档的后缀名 .xml
			2. xml第一行必须定义为文档声明
			3. xml文档中有且仅有有一个根标签
			4. 属性值必须用引号(单双都可以)引起来
			5. 标签必须正确关闭
			6. xml标签名称区分大小写
	* 快速入门
	<?xml version='1.0' ?>

	<users>
		<user id='1'>
			<name>yoghurts</name>
			<age>12</age>
			<gender>male</gender>
		</user>
		<user id='2'>
			<name>yoghurt</name>
			<age>14</age>
			<gender>female</gender>
		</user>
	</users>
	
	* 组成部分：
		1. 文档声明
			1. 格式：<?xml 属性列表 ?>
			2. 属性列表：
				* version：版本号，必须的属性1.0
				* encoding：编码方式，告知解析引擎当前文档使用的字符集
		2. 指令
		3. 标签
		4. 属性
		5. 文本：
			* CDATA区：在该区域中的数据会被原样显示
				* 格式： <![CDATA[ 数据 ]]>
		
	* 约束：规定xml文档的书写规则
		* 作为框架的使用者（程序员）
			1. 能够在xml中引入约束文档
			2. 能够简单的读懂约束文档

		* 分类：
			1. DTD：一种简单的约束技术
			2. Schema：一种复杂的约束技术

		
		* DTD:
			* 引入dtd文档到xml文档中
				* 内部dtd：约束规则定义在xml文档中
				* 外部dtd：将约束规则定义在外部的dtd文件中
					* 本地：<!DOCTYPE 根标签名 SYSTEM "dtd文件的位置">
					* 网络：<!DOCTYPE 根标签名 PUBLIC "dtd文件名字" "dtd文件的位置URL">
			
		* Schema：
			* 引入：
				1. 填写xml文档的根元素
				2. 引入xsi前缀： xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
				3. 引入xsd文件的命名空间： xsi:schemaLocation="http://itcast.cnxml student.xsd"
				4. 为每一个xsd约束声明一个前缀，作为标识 xmlns="http://www.itcast.cn/xml"

		5. 解析xml
			1. DOM：将标记语言文档一次性加载进内存，在内存中形成一棵dom树
				* 优点：操作方便，可以对文档进行CRUD的操作
				* 缺点：占内存

			2. SAX：逐行读取，基于事件驱动的
				* 优点：不占内存
				* 缺点：只能读取，不能增删改

			* xml常见的解析器：
				1. JAXP：sun公司提供，性能不佳
				2. DOM4J:一款非常优秀的解析器
				3. joup：一款html解析器，也可以用来解析xml
				4. PULL：Android操作系统内置的解析器，sax方式的。


## jsoup
	1. 对象的使用：
		1. Jsoup：工具类，可以解析html或xml文档，返回document
			* parse：解析html文档或xml文档，返回document
				* parse(File in, String charsetName)：解析xml或html文档
				* parse(URL url, int timeoutMills)：通过网路路径获取指定的html或xml文档对象
		2. Document：文档对象，代表内存中的dom树
			* 获取Element对象
				* getElementById(String id)
				* getElementByTag(String TagName)：根据标签名获取
				* getElementByAttribute(String key)：根据属性名称获取
				* getElementByAttributeValue(String key, String value)：根据对应的属性名和属性值
		3. Elements：元素Element对象的集合，可以当做ArrayList<Element>使用
		4. Element：元素对象
			1. 获取子元素对象(与上相同)
			2. 获取属性值
				* string attr(String key)：根据属性名称获取属性值
			3. 获取文本内容
				* String text():获取文本内容
				* String html():获取innerHTML
		5. Node：节点对象
			* 是Document和Element的父类	

		* 快速查询方式：
			1. selector：选择器
				* 使用的方法：Elements select(String cssQuery)
					* 语法：参考selector类中定义的语法
			2. XPath：XPath即为XML路径语言，它是一种用来确定XML文档中某部分位置的语言
				* 使用Jsoup的XPath需要额外导入jar包
				* 查询wcschool参考手册，使用语法完成查询


## web服务器
	* 服务器：安装了服务器软件的计算机
	* 服务器软件：接受用户的请求，处理请求，做出响应
	* web服务器软件：接收用户的请求，处理请求，做出响应
		* 通过部署web项目，让用户通过浏览器来访问这些项目

	* 常见的与Java相关的web服务器软件：
		* webLogic：Oracle公司，大型的JavaEE服务器，支持所有的JavaEE规范，收费。
		* webSphere：IBM公司，大型的JavaEE服务器，支持所有的JavaEE规范，收费。
		* JBOSS：JBOSS公司，大型的JavaEE服务器，支持所有的JavaEE规范，收费。
		* Tomcat：Apache基金组织，中小型JavaEE服务器，仅仅支持少量的JavaEE规范servlet/jsp，开源的，免费的。

	* JavaEE：Java语言在企业级开发中使用的技术规范的总和，一共规定了13项大的规范。

	* Tomcat：web服务器软件
		1. 下载
		2. 安装
		3. 启动
			* bin/startup.bat 双击运行该文件即可
			* 访问：浏览器输入：http://localhost:8080 回车访问自己
							* http://别人的ip:8080 访问别人

			* 可能遇到的问题：
				1. 黑窗口一闪而过：
					* 原因：没有正确配置JAVA_HOME环境变量
				2. 启动报错：
					1. 暴力：找到占用的端口号，并且找到对应的进程，杀死该进程
						* cmd输入：netstat -ano
					2. 温柔：修改自身的端口号
						* conf/server.xml
						* 一般会将端口改成80，因为80是http协议的默认端口号
							* 好处：在访问时不需要输入端口号
		4. 关闭：
			1. 正常关闭：
				1. 法一：bin/shutdown.bat
				2. 法二：ctrl+c
			2. 强制关闭：点击启动窗口的X
		5. 配置
			* 部署项目的方式：
				1. 直接将项目放到webapps目录下即可
					* /文件名：项目的外包裹的那个文件夹，虚拟目录
					* 简化部署：将项目打成一个war包，再将war包放置到webapps目录下
						* war包会自动解压缩

				2. 配置conf/sever.xml文件
					在<Host>标签体中配置
					<Context docBase="D:\hello" path:"/hehe" />
					* docBase：项目所在文件夹
					* path：虚拟目录

				3. 在conf/Catalina/localhost文件夹里创建任意名称的xml文件，在文件中编写：
					<Context docBase="D:\hello" />
					* 虚拟目录：就是这个xml文件的名称
					* 热部署，把文件类型改为xml_bak即可忽略

			* 静态项目和动态项目：
				* 目录结构
					* Java动态项目的目录结构
						-- 项目根目录
							-- WEB-INF目录：
								-- web.xml：web项目的核心配置文件
								-- classes目录：放置字节码文件的目录
								-- lib目录：放置依赖的jar包


## Servlet： server applet
	* 概念：运行在服务器端的小程序
		* Servlet就是一个接口，定义了Java类被浏览器访问到(tomcat识别)的规则
		* 将来我们自定义一个类，实现Servlet接口，重写方法

	* 快速入门：
		1. 创建一个JavaEE项目
		2. 定义一个类，实现Servlet接口
		3. 实现接口的抽象方法
		4. 配置Servlet
			在web.xml中：
		<servlet>
            <servlet-name>Demo01</servlet-name>
            <servlet-class>web.servlet.Demo01HelloServlet</servlet-class>
        </servlet>
        <servlet-mapping>
            <servlet-name>Demo01</servlet-name>
            <url-pattern>/Demo01</url-pattern>
        </servlet-mapping>
	
	* 执行原理：
		1. 当服务器接受到客户端浏览器的请求后，会解析请求URL路径，获取访问的Servlet的资源路径
		2. 查找web.xml文件，是否有对应的<url-pattern>标签体内容
		3. 如果有，则在找到对应的<servlet-class>全名类
		4. tomcat会将字节码文件加载进内存，并且创建其对象
		5. 调用其方法

	* Servlet的生命周期：
		1. 被创建：执行init方法，只执行一次
			* Servlet什么时候被创建？
				* 默认情况下，第一次被访问时，Servlet被创建
				* 也可以配置执行Servlet的创建时机
					* 在<servlet>标签下配置
						1. 第一次访问时，创建
							* <load-on-startup>的值为负数，默认-1
						2. 在服务器启动时，创建
							* <load-on-startup>的值为0或正整数0-10
							
			* Servlet的init方法，只执行一次，说明一个Servlet的内存中只存在一个对象，Servlet是单例的
				* 多个用户同时访问时，可能存在线程安全的问题
				* 解决：尽量不要在Servlet中定义成员变量。即使定义了，也不要修改。
				
		2. 提供服务：执行service方法，执行多次
			* 每次访问Servlet时，Service方法都会执行一次
		3. 被销毁：执行destroy方法，只执行一次
			* Servlet被销毁时执行，服务器关闭时，Servlet会被销毁。
			* 只有服务器正常关闭时，才会执行destroy方法
			* destroy方法在Servlet被销毁前执行，一般用于释放资源。

	* Servlet 3.0：
		* 好处：
			* 支持注解配置，可以不需要web.xml

		* 步骤：
			1. 创建JavaEE项目，选择Servlet的版本3.0以上
			2. 定义一个类，实现Servlet接口
			3. 复写方法
			4. 在类上使用@WebServlet注解，进行配置
				* @WebServlet("资源路径")


	* IDEA和tomcat的相关配置文件
		1. IDEA会为每一个tomcat部署的项目单独建议一份配置文件
			* 查看控制台的log：Using CATALINA： "存放的位置"
		2. 工作空间项目和tomcat部署的web项目
			* tomcat真正访问的是"tomcat部署的web项目"，"tomcat部署的web项目"对应着"工作空间项目"的web目录下的所有资源
			* WEB-INF目录下的资源不能被浏览器直接访问
		3. 断点调试：使用"小虫子"启动debug
	
	* Servlet的体系结构
		Servlet -- 接口
			|
		GenericServlet -- 抽象类
			|
		HttpServlet -- 抽象类

		* GenericServlet：将Servlet接口中的其他方法做了默认空处理，只将service作为抽象
			* 将来定义Servlet类时，可以继承GenericServlet，实现service方法即可

		* HttpServlet：对http协议的一种封装，简化操作
			1. 定义类继承HttpServlet
			2. 复写doGet/doPost方法

	* Servlet相关配置
		1. urlpartten：Servlet访问路径
			1. 一个Servlet可以定义多个访问路径：@WebServlet({"/d4", "/dd4", "/ddd4"})
			2. 路径定义规制：
				1. /XXX
				2. /XXX/XXX：多层路径，目录结构
				3. *.do



## HTTP:
	* 概念：Hyper Text Transfer Protocol 超文本传输协议
		* 传输协议：定义了客户端和服务器通信时，发送数据的格式
		* 特点：
			1. 基于TCP/IP的高级协议
			2. 默认端口号:80
			3. 基于请求/响应模型的：一次请求对应一次响应
			4. 无状态的：每次请求之间相互独立，不能交互数据

		* 历史版本：
			* 1.0：每一次请求响应都会建立新的连接
			* 1.1：复用连接

	* 请求消息数据格式
		1. 请求行
			请求方式 请求url 请求协议/版本号
			POST /login.html HTTP/1.1
		
			* 请求方式：
				* HTTP协议有7种请求方式，常用的两种：
					* GET：
						1. 请求参数在请求行中，在url后
						2. 请求的url长度有限制
						3. 不太安全
					
					* POST：
						1. 请求参数在请求体中
						2. 请求的url长度没有限制
						3. 相对安全

		2. 请求头
			请求头名称: 请求头值
			* 常见的请求头：
				1. User-Agent：浏览器告诉服务器，我访问你使用的浏览器版本
				2. Referer：告诉服务器，当前请求从哪里来？
					* 作用：1.防盗链 2.统计工作
		3. 请求空行
			空行，用来分割POST请求的请求头和请求体的。
		4. 请求体(正文)
			* 封装POST请求消息的请求参数的


## Request：
	1. request对象和response对象的原理
		1. request和response对象是由服务器创建的，我们来使用它们
		2. request对象是来获取请求消息，response对象是来设置请求消息的

	2. request对象继承体系结构：
		ServletRequest     --接口
			|  继承
		HttpServletRequest --接口
			|  实现
		org.apache.catalina.connector.RequestFacade类(tomcat)
	3. request：功能
		1. 获取请求消息数据
			1. 获取请求行数据
				* GET /day14/demo1?name=zhangsan HTTP/1.1
				* 方法：
					1. 获取请求方式：GET
						* String getMethod()
					2. (*)获取虚拟目录： /day14
						* String getContextPath()
					3. 获取Servlet路径： /demo1
						* String getServletPath()
					4. 获取get方式请求参数：name=zhangsan
						* String getQueryString()
					5. (*)获取请求URI：/day14/demo1
						* String getRequestURI():   /day14/demo1
						* StringBuffer getRequestURL() : http://localhost/day14/demo1

						* URL：统一资源定位符：http://localhost/day14/demo1
						* URI：统一资源标识符：/day14/demo1 范围更大

					6. 获取协议及版本： HTTP/1.1
						* String getProtocol()

					7. 获取客户机的IP地址：
						* String getRemoteAddr()


			2. 获取请求头数据
				* 方法：
					* (*)String getHeader(String name)：通过请求头的名称获取请求头的值
					* Enumeration<String> getHeaderNames()：获取所有的请求头名称

			3. 获取请求体的数据：
				* 请求体：只有POST请求方式才有请求体，在请求体中封装了POST请求的请求参数
				* 步骤：
					1. 获取流对象：
						* BufferedReader getReader()：获取字符输入流，只能操作字符数据
						* ServletInputStream getInputStream()：获取字节输入流，可以操作所有类型数据
							* 在文件上传知识点后再讲解

					2. 再从流对象拿数据

		2. 其他功能：
			1. 获取请求参数通用方式
				1. String getParameter(String name)：根据参数名称获取参数值
				2. String[] getParameterValues(String name)：根据参数名称获取参数值的数组
				3. Enumeration<String> getParameterNames()：获取所有请求的参数名称
				4. Map<String, String[]> getParameterMap()：获取所有参数的map集合
			2. 请求转发：
			3. 共享数据
			4. 获取ServletContext

		
					   