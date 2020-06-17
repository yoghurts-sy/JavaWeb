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
		4. 列表标签：不建议使用，使用css样式
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