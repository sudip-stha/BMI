const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseFloat(document.querySelector('#inpHeight').value);
    const weight=parseFloat(document.querySelector('#inpWeight').value);
    const results=document.querySelector('.results');
    const resultdesc=document.querySelector('.resultdesc');
    if(height ===''||height < 0 || isNaN(height)){
     results.innerHTML=`Please enter valid height ${height}`;
    }
    else if(weight ===''||weight < 0 || isNaN(weight)){
        results.innerHTML=`Please enter valid height ${weight}`;
    }
    else{
       const bmi= (weight/((height*height)/10000)).toFixed(2);
       results.innerHTML=`<span>${bmi}</span>`;
       if(bmi<=18.6){
        resultdesc.innerHTML=`Your weight is under weight`;
       }
       else if(bmi>18.6 && bmi<=24.9){
        resultdesc.innerHTML=`Your weight is normal weight`;
       }
       else{
        resultdesc.innerHTML=`Your weight is over weight`;
       }
    }
})

// function randomNum(number){
//   return Math.floor(Math.random()*(number+1));
// }
// const bgColor=function(){
//     const change=`rgb(${randomNum(255)} ${randomNum(255)} ${randomNum(255)} )`
//     document.body.style.backgroundColor=change;
// }
// setInterval(bgColor,5000);
