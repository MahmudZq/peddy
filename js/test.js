const counter = () =>{
    // const counter = document.getElementById("modalContentAccepted");d
    // const num = document.getElementById("count");
    let i = 3;
    // console.log(num);
    //  num.innerHTML = i;

    const counting = setInterval( () =>{  
    console.log(i);
    i--;    
    // num.innerHTML = ` ${i}`;
    // console.log(num);

    if(i < 0){
    clearInterval(counting)}
    
    },1000)
}
counter();