new Vue({
	el: "#forms",

	data: {
		isLogin: false,
		username: '',
		password: '',
	},

	methods: {
		create: function() {
			if (this.username === '' && this.password === '') {
				alert(`Please Enter Your Username and Password`);
				console.log(`Please Enter Your Username and Password`);
			} else {
				localStorage.setItem(`username`, this.username);
				localStorage.setItem(`password`, this.password);
			}
		},

		loginUser: function() {
			if (this.username === localStorage.getItem(`username`) &&
			this.password === localStorage.getItem(`password`) ) {
				alert(`You Login Your Account successfully...`);
				console.log(`You Login Your Account successfully...`);
			} else {
				alert(`Username Or Password Is Incorrect...`);
				console.log(`Username Or Password Is Incorrect...`);
			}
		}
	}
});