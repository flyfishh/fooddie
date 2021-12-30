function checkUsername(){
		//1.获取用户名值
		var username = $("#username").val();
	
		//2.定义正则
		var reg_username = /^\w{8,20}$/;
	
		//3.判断，给出提示信息
		var flag = reg_username.test(username);
		if (flag){
			//用户名合法
			$("#username").css("border","");
		}else{
			//用户名非法
			$("#username").css("border","1px solid red");
		}
		return flag;
	}
	function checkPassword(){
		var password = $("#password").val();
	
		//2.定义正则
		var reg_password = /^\w{8,20}$/;
	
		//3.判断，给出提示信息
		var flag = reg_password.test(password);
		if (flag){
			//密码合法
			$("#password").css("border","");
		}else{
			//密码非法
			$("#password").css("border","1px solid red");
		}
		return flag;
	}
	function checkEmail(){
		var email = $("#email").val();
	
		//2.定义正则
		var reg_email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	
		//3.判断，给出提示信息
		var flag = reg_email.test(email);
		if (flag){
			//邮箱合法
			$("#email").css("border","");
		}else{
			//邮箱非法
			$("#email").css("border","1px solid red");
		}
		return flag;
	}
	function checkName(){
		var name = $("#name").val();
	
		//2.定义正则
		var reg_name = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/;
	
		//3.判断，给出提示信息
		var flag = reg_name.test(name);
		if (flag){
			//姓名合法
			$("#name").css("border","");
		}else{
			//姓名非法
			$("#name").css("border","1px solid red");
		}
		return flag;
	}
	function checkTelephone(){
		var telephone = $("#telephone").val();
	
		//2.定义正则
		var reg_telephone = /^1[3|4|5|7|8]\d{9}$/;
		//3.判断，给出提示信息
		var flag = reg_telephone.test(telephone);
		if (flag){
			//手机号合法
			$("#telephone").css("border","");
		}else{
			//手机号非法
			$("#telephone").css("border","1px solid red");
		}
		return flag;
	}
	
	function createCheckCode(){
			var sp = document.getElementById("checkCode");
			var arrC = ['a','b','c','d','e','f','g','h','i','j',
					'k','l','m','n','o','p','q','r','s','t','u',
					'v','w','x','y','z','A','B','C','D','E','F',
					'G','H','I','J','K','L','M','N','O','P','Q',
					'R','S','T','U','V','W','X','Y','Z',
					'0','1','2','3','4','5','6','7','8','9'];
			var code = '';
			
			for(var i=1; i<=4; i++ ){
				var index = Math.floor( Math.random() * 62 ) // 地板：下限
				code += arrC[index];
			}
							
			sp.innerHTML = code;
			sp.style.backgroundColor = "yellow";
			
			return code; //返回产生的验证码
		}
	
	$(function(){
		var randCode = createCheckCode(); //随机验证码
		
		//看不清，更换验证码
		
		$("#aa").click(function(){
			randCode = createCheckCode();
		});
		
		
		$("#submit").click(function(){
			var code = $("#code").val();
			if(checkUsername() && checkPassword()){
				if(code == randCode){
					alert("恭喜您，注册成功!");
					location = "../index.htm";
				}
				else{
					alert("注册失败");
					$("#msg").text("验证码输入有误!");
				}
			}
			else{
				$("#msg").text("用户名或密码输入不当!");
				alert("注册失败");
			}
		});
		$("#username").blur(checkUsername);
		$("#password").blur(checkPassword);
		$("#email").blur(checkEmail);
		$("#name").blur(checkName);
		$("#telephone").blur(checkTelephone);
	})