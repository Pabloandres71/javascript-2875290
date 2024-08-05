
const formulario = document.querySelector('.formulario')
const username = document.querySelector('.username')
const password = document.querySelector('.password')



//Inicio de sesión
function validarUsuario (e){
    e.preventDefault(); 

    let currentUser = JSON.parse( localStorage.getItem('user') )
    console.log(currentUser.userName)
    console.log(currentUser.userPass)

    console.log(Boolean(username.value === currentUser.userName)) ;
    console.log(Boolean(password.value === currentUser.userPass)) ;

    if(username.value === currentUser.userName && password.value === currentUser.userPass){
        console.log('Felicidades puedes entrar 🔥')
        window.location = "./userpage.html"
    }else{
        console.log('Sigue intentando')
    }

    formulario.reset()
}
formulario.addEventListener('submit',validarUsuario)



