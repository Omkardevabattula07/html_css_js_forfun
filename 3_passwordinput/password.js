let icon =document.querySelector("#icon")
let password =document.querySelector("#password")


icon.addEventListener("click", ()=>{
    if (password.type=='password') {
        password.type="text";
        icon.src="image2.jpeg"
    }
    else{
        password.type='password';
        icon.src='image1.jpeg'
    }
})