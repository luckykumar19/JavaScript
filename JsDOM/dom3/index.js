//adding 100para
const t1 = performance.now();
for(let i=1; i<=100 ; i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is Para' + i;
    document.body.appendChild(newElement);
}
const t2=performance.now();
console.log("This took"+(t2-t1)+"ms");
//end adding para
// optimising a bit
const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i=1;i<=100;i++){
    let element= document.createElement('p');
    element.textContent='This is para' +i;

    myDiv.appendChild(element);

}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("This took"+(t4-t3)+"ms");
