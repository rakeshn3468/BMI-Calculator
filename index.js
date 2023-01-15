function al(){
  let input=document.querySelector('#cm').value;
  let i=Number(parseFloat(input));
  let inp2=document.querySelector('#in').value;
  let s=Number(parseFloat(inp2));
  let re;
  re=(i*30.48)+(s*2.54);

  j.innerHTML="Your Height in Cm is "+Math.round(re,2);

}

function calc(){
  let userinput=(document.querySelector("#input1").value);
  let w=parseFloat(userinput);
  let userheight=(document.querySelector("#input2").value);
  let h=parseFloat(userheight);
  let message=document.querySelector("#final");
  let res;

  res=(w/((h**2)/(100**2)))
  if ((res<17)||(res>25)){
    alert("You should Consult Your Doctor!!!")
    p.innerHTML="Your BMI is "+Math.round(res,4)+" ,kindly consult your Doctor..";
  }
  else{
    alert("Congratulations!! keep it up..")
    p.innerHTML="Your BMI is "+Math.round(res,4)+" ,Well done Keep it up..";
  }

}
