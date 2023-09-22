// console.log('chaliye shuru karte hai');
// // object create 
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function () {
//         console.log('draw');
//     }

// };
// //factory function
// function createRectangle(length, breadth) {
//     return rectangle = {
//         length,
//         breadth,
//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
// }  
// let rectangleObj1 = createRectangle(5,1);
// let rectangleObj2 = createRectangle(5,10);
// let rectangleObj3 = createRectangle(8,10);



//Constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudent
// function Rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw = function(){
//         console.log('draawing')
//     }
// } 

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(); 

// rectangleObject.color='yellow';
// console.log(rectangleObject); 
// delete rectangleObject.color;
// console.log(rectangleObject);

// let a = {value:10};
// function inc(a){
//     a.value++;

// }
// inc(a);
// console.log(a.value);
//  // for  in loop
// for(let key in rectangle){
    //     //key are reflected through key variable
    //     // values are reflected through  rectangle[key]
    //     console.log(key,rectangle[key]);
    // }
    
    //  for(let key of Object.keys(rectangle)){
        //     console.log(key);
        //  }
        
        // if ('breadth' in rectangle) {
            //     console.log('Present');
            // }
            // else{
                //     console.log('Absent');
                // }
//         let rectangle ={
//             length:2,
//             breadth:4
//         };
                
//     let src = {
//     a:10, 
//     b:20,
//     c:30,
// };

// let dest = {};

// for (let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest); 
// src.a++;
// console.log(dest);

// let first=[1,2,3];
// let second=[4,5,6];

// // let combined = first.concat(second);
// let combined=[...first, ...second];
// console.log(combined);

// let  arr = [10,20,30,40,50]; 
// for(let value of arr){
//     console.log(value); 
// }

// let message ='This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);
// let stand = function walk(){
//     console.log('walking');
// }

// stand();

const text =document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

// text.style.backgroundColor="red";
// text.classList.add("change");
text.classList.remove("change");
changeColor.addEventListener('click',function(){
text.classList.add('change')

});
