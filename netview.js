
const user=[
    {
        email:"hunde@gmail.com",
        password:"pass0643"
    },
    {
        email:"heyo@gmail.com",
        password:"pass0632"
    },

    {
        email:"seni@gmail.com",
        password:"pass1602"
    },

    {
        email:"iman@gmail.com",
        password:"pass0648"
    },

    {
        email:"hiki@gmail.com",
        password:"pass0633"
    },

    {
        email:"ifa@gmail.com",
        password:"pass0647"
    }
]


function login() {
    //retrieve data from input
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    for (let i = 0; i < user.length; i++) {
        if (email == user[i].email && password == user[i].password)
        {
            location.href = "logged.html";
            return;
        }
    }
    alert("incorrect email or password")
}
function registerUser(){
    let regEmail = document.getElementById("newEmail").value
    let regPass = document.getElementById("newPassword").value
    let confirmPassword = document.getElementById("conPass").value

    for(let i=0; i<user.length;i++)
    {
        if(regEmail==user[i].email){
            alert("Email is already in us")
            return;
        }

    }
    let newUser={
        email:regEmail,
        password:regPass
    }
    if(regPass==confirmPassword){
        alert("successfully registerd")
        user.push(newUser)
        location.href="logged-in.html";
    }
    else{
        alert("Registration failed")
    }
    }

const ball = document.querySelector(".toggleBall");
const items = document.querySelectorAll(
    ".body,.header,.film-info,.footer_about,.footer_privecy,.figCap,.search_bar,.toggle"
);

ball.addEventListener("click",()=>{
        items.forEach(item=>{
            item.classList.toggle("active")

        })
})


