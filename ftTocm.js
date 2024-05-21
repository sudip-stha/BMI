const form=document.querySelector('.form');

addEventListener('submit',function(e){
e.preventDefault();

const feet=parseFloat(document.querySelector('#feetValue').value)
const result=document.querySelector('.result')
if(feet===''||isNaN(feet)||feet < 0 )  {
result.innerHTML=` ${feet} invalid Pleace enter valid input`;    
}
else{
    const cm=(feet*30.48).toFixed(3);
    result.innerHTML=`<span>${cm}<span>`
}

})
document.getElementById('btn2').addEventListener('click', function() {
    document.getElementById('fileLink').click();
});
