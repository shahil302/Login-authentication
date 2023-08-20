
function checklogin() {
 const logged= localStorage.getItem('logged');
 if(logged){
  window.location.href='securepage.html';
 }
}

// Function to register user
function registerUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const registeruser = JSON.parse(localStorage.getItem('registeruser')) || [];
  const isregister= registeruser.some(user => user.username === username);

  if (isregister) {
    alert("Username already registered");
   
  }
  else{
    alert("Sign-up successfully. you can now login .")
  }

  registeruser.push({username, password});
  localStorage.setItem('registeruser',JSON.stringify(registeruser));

  
 document.getElementById('registerForm').request();

 window.location.href= 'index.html';
}
function checkcredentials(){
  const username= document.getElementById('username').value;
  const password= document.getElementById('password').value;

  const registeruser =JSON.parse(localStorage.getItem('registeruser')) ||[];
  const user = registeruser.find(u=> u.username === username && u.password=== password);

  if (user){
    localStorage.setItem('logged', JSON.stringify(user));
  
  window.location.href ='securepage.html';
  return false;
  }
  else{
    alert("invalid username and password");
    return false;
  }

}
checklogin();


