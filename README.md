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
			* head：头标签，用于指定html文档的一些属性
			* title：标题标签
			* body：体标签
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
			* img： 展示图片，自闭和标签
				<img src="statics/1.moon.jpg" aria-atomic="true" alt="打不开此图片"/>
		4. 列表标签：不建议使用，使用css样式
		5. 链接标签：
			* a：定义一个超链接
				* 属性：
					* href：指定访问资源的URL
					* target：指定打开资源的方式
						* _self：默认值，在本页面打开
						* _blank：在一个新的页面打开
		6. 表格标签：

