var content=new Vue({
	el:'#login',
	data:{
		count:"",
		pass:"",
		verti:"",
		message:""
	},
	methods:{
		submit:function(){
			this.message="";
			if(this.count==""&&this.pass==""){this.message="账户与密码栏不能为空！"}
			else if(this.count==""){this.message="账户栏不能为空！"}
			else if(this.pass==""){this.message="密码栏不能为空！"}
			else if(this.verti!==pictex){this.message="验证码错误！"}
			else{Window.Location.href()}
		},
		zhuce:function(){
			Window.Location.href();
		}
	}
})