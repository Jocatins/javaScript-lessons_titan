let user = {
    name: 'joca',
    age: 23,
    email: 'gypsy@titanspace.com',
    location: 'space',
    blogs: ['space imagination', 'how to connect to the ether'],
    login: function (){
        console.log('user logged in');
    },
    //short regular version
    logout(){
        console.log('user logged out');
    },
    logBlogs: function(){
       // console.log(this.blogs);
        //to cycle through the blogs and output each one
        console.log('titan has written he following blogs');
        this.blogs.forEach(blog => {
            console.log(blog);
        })

    }
};
user.login();
user.logout();
user.logBlogs();


//string method
const name = 'titan';
name.toUpperCase();