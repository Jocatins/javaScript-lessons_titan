//storing objects inside an array
const blogs = [
    {title: 'why titans rule', likes: 90},
    { title: '10 titans left', likes: 100}
];

let user = {
    name: 'joca',
    age: 23,
    email: 'gypsy@titanspace.com',
    location: 'space',
    blogs: [{title: 'why titans rule', likes: 90},
    { title: '10 titans left', likes: 100}
],
logBlogs(){
    console.log('titan has written these blogs');
    this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);
    });
}
};
user.logBlogs();
