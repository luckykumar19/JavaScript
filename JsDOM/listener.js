
// document.addEventListener('click', function(){
//     console.log('I have clicked on the document');
// });
const content = document.querySelector('#wrapper');
content.addEventListener('click',function(event){
    console.log(event);
})