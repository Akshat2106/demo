// console.log('person1: shows ticket');
 //console.log('person2: shows ticket');

// const promiseWifeBringingTickets=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });


// const getPopcorn=promiseWifeBringingTickets.then((t)=>{
//     console.log('wife: i have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
// });

// const getButter=getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve, reject)=> resolve(`${t} butter`));
// });

// getButter.then((t)=> console.log(t));
//console.log('person4: shows ticket');
//console.log('person5: shows ticket');

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie=async()=>{
// const promiseWifeBringingTickets=new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve('ticket'),3000);
// });
// const getPopcorn=new Promise((resolve, reject)=> resolve(`popcorn`));
// const addButter =new Promise((resolve, reject)=> resolve(`butter`));
// const getColdDrinks=new Promise((resolve, reject)=>resolve(`drinks`));

// let ticket=await promiseWifeBringingTickets;
// console.log(`husband: i got some ${ticket}`);
// console.log('husband: we should go in');
//  console.log('wife: no i am hungry');
     
//  let popcorn=await getPopcorn;
//  console.log(`husband: i got some ${popcorn}`);
//  console.log('husband: we should go in');
//  console.log('wife: i need butter on my popcorn');
     
//  let butter =await addButter;
//  console.log(`husband: i got some ${butter} on popcorn`);
//  console.log('husband: anythig else darling?');
//  console.log('wife: lest go we are getting late');
//  console.log(`husband: thank you for reminding me`);
 
//  let drinks =await getColdDrinks;
//  console.log(`wife: i want some drinks also`);
//  console.log(`husband: i got some drinks also`);
//  console.log(`wife: then lets go in`);
// return ticket;
// } 
// preMovie().then((m)=>console.log(m));
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

  const Post=async()=>{
 const crPost=new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('posts'),3000);
    });
    const getpost=new Promise((resolve, reject)=> resolve(`createPost`));
    const dontgetpost =new Promise((resolve, reject)=> resolve(`deletePost`));
     let posts=await crPost;
     console.log(`post has to be created`);
    let createPost=await getpost;
     console.log('post1 is created');
     console.log('post2 is created');
     let deletePost=await dontgetpost;
     console.log('post1 is deleted');
     console.log('post2 is deleted');
     return posts;
}
Post().then((m)=>console.log(m));