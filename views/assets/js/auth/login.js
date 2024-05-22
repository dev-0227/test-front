
document.ready(function () {
  "use strict";
  document.getElementById("login").click(function(){
    console.log("Click")
    let entry = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }
    if(entry.email == ""){
      toastr.info('Please enter your email');
      document.getElementById('email').focus();
      return;
    }
    if(entry.password == ""){
      toastr.info('Please enter your password');
      document.getElementById('password').focus();
      return;
    }
    sendRequestWithToken('POST', localStorage.getItem('authToken'), entry, "login/login", (xhr, err) => {
      let result = JSON.parse(xhr.responseText);
      if (!err) {
        if(result.status == "success"){
          localStorage.setItem('userid', result.userid);
          localStorage.setItem('usertype', result.type);
          localStorage.setItem('username', result.fname+" "+result.lname);
          localStorage.setItem('email', result.email);
          localStorage.setItem('permission', result.permissions);
          localStorage.setItem('authToken', result.token);
          window.location.replace("./security");
        }
        else if(result.status == "approve"){
          toastr.info('You are not approved by system. Please wait for some time');
        }
        else{
          toastr.error('Credential is invalid');
        }
        
      }
      else {
        toastr.error('Credential is invalid');
      }
    });
  });
});
