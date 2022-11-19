const posts=[
    {title :'post one',body:'this is post one',createdAt: new Date().getTime()},
    {title :'post two',body:'this is post two',createdAt:new Date().getTime()}
];

function getPosts(){
    let output='';
    setInterval(() =>{
        for(let i=0;i<posts.length;i++){
        posts.forEach((post,index)=>{
            output+=`<li>${posts[i].title}-last updated ${(new Date().getTime() -posts[i].createdAt/1000)}</li>`;
        });
    }
        document.body.innerHTML=output;
        },1000);
}
function createPost(post,callback){
    setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000);
}

function PostFour(post,callback){
    setTimeout(() =>{
        posts.push(post);
        callback();
    },3000);
}

createPost({title :'post three',body:'this is post three',createdAt:new Date().getTime()}); 

PostFour({title :'post four',body:'this is post four',createdAt:new Date().getTime()},getPosts);


