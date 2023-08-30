function f_error(classnum , error_name){
  document.getElementsByClassName('error')[classnum].innerHTML = error_name;
}

function clear_error(){
  for(let i = 0 ; i<5;i++){ 
    document.getElementsByClassName('error')[i].innerHTML = " ";
  }
  
}

function check(){
  clear_error();
  const fname = document.forms['myform']["fname"].value;
  const femail = document.forms['myform']["femail"].value;
  const fnum = document.forms['myform']["fnumber"].value;
  const fpassword = document.forms['myform']["fpassword"].value;
  const fcpassword = document.forms['myform']["fcpassword"].value;

                          //  name check
   if(fname.length == 0){
    f_error(0 ,"Please enter the name");
    return false;
   }
   if(fname.length >20){
    f_error(0 ,"Name is too large");
    return false;
   }
   var tuppercase = /[A-Z]/;
   var tlowercase = /[a-z]/;
   var cuppercase = tuppercase.test(fname);
   var clowercase = tlowercase.test(fname);
   if(cuppercase | clowercase);else{f_error(0 ,"Please enter valid Name");return false;}

                            //  email check
   if(femail.length == 0){
    f_error(1 ,"Please enter the email");
    return false;
   }


                            // Number check
   if(fnum == 0){
    f_error(2 ,"Please enter the number");
    return false;
   }
   
  for(let i = 0 ; i<fnum.length ;i++){
    if(fnum[i]>=0 & fnum[i]<=9){}
    else {f_error(2 , "Please enter only digit value"); return false};
  }

                            //  Password check
  if(fpassword == 0){
    f_error(2 ,"Please enter the password");
    return false;
   }
  if(!(fpassword.length>=7) ){ f_error(3 ,"Minimum password size is 8"); return false;};
  if(fcpassword.length != fpassword.length){f_error(4 , "Password not match"); return false;}
  
  for( let i = 0; i< fpassword.length ; i++){
    if(fpassword[i]!=fcpassword[i]){ f_error(4 , "Password not match"); return false;}
  }
  
  uppercase = /[A-Z]/;
  lowercase = /[a-z]/;
  digit = /[0-9]/;
  specialchar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/;
  
  cuppercase = uppercase.test(fpassword);
  clowercase = lowercase.test(fpassword);
  cdigit = digit.test(fpassword);
  cspacialchar = specialchar.test(fpassword);

  if(!(cuppercase & clowercase & cdigit & cspacialchar)){
    f_error(3 , "Password is not Strong (Abc@#123)");
    return false;
  }
  return true;
}
