//funtion declaration
function formValidation() {
    // variable declarations
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;
   let message = document.getElementById("message").value;
  

    // To validate name
    if (name === "") {
        document.getElementById("namelb").style.visibility = "visible";
       
      return false;
    } else {
        document.getElementById("namelb").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "green";
    }
  

    // To validate email and specify email format
   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        alert("Email field can not be empty");
      
    } else if (!emailRegex.test(email)) {
        document.getElementById("emaillb").style.visibility = "visible";
  
    } else{
        document.getElementById("emaillb").style.visibility = "hidden";
        document.getElementById("email").style.borderColor = "green";
        
    }


    // To validate Phone numbers
    // let phoneRegex = /^\d{11}$/;
    if (phone === "") {
        document.getElementById("phonelb1").style.visibility = "visible";
    } else{
        document.getElementById("phonelb1").style.visibility = "hidden";   
    }
    if(phone.length !== 11 && phone === ""){
      document.getElementById("phonelb1").style.visibility = "visible";

      return false;
    } 
    if(phone.length !== 11){
      document.getElementById("phonelb2").style.visibility = "visible";

    } else {
      document.getElementById("phonelb2").style.visibility = "hidden";
      document.getElementById("phone").style.borderColor = "green";

    }
  

    // To validate Textarea input
    if (message === "") {
      document.getElementById("messagelb").style.visibility = "visible";
      return false;
    } else {
      document.getElementById("messagelb").style.visibility = "hidden";
      document.getElementById("message").style.borderColor = "green";
    }
  
      return true;
  }
  