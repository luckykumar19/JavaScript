// //adding 100para
// const t1 = performance.now();
// for(let i=1; i<=100 ; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is Para' + i;
//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("This took"+(t2-t1)+"ms");
// //end adding para
// // optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1;i<=100;i++){
//     let element= document.createElement('p');
//     element.textContent='This is para' +i;

//     myDiv.appendChild(element);

// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// // console.log("This took"+(t4-t3)+"ms")


// let wadaa1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{console.log('setimeout1 started');
// },2000);
// resolve(true);
// })

// let output = wadaa1.then(()=>{let wadaa2=new Promise (function(resolve, reject){resolve("waada 2 resolved");
//  })
//  return wadaa2;
// }) 
// output.then((value) => console.log(value));

// async function abcd(){
//     return "Kya hua tera";
// }

//  async function utility(){
// let delhiMausam = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("Delhi me bhot garmi hai");
//     },1000);
// });

// let hydMausam = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("Hyderabad is cool");
//     },5000);
// });

// let dM = await delhiMausam;
// let hM =  await hydMausam;

//  return[dM,hM];
// }

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();
async function helper(){
let options = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  let content = await fetch('https://jsonplaceholder.typicode.com/posts',options); 
    let response = content.json();
    return response;
}

async function utility(){
    let ans = helper;
    console.log(ans); 
}
utility();
