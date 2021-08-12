
var pass = document.getElementById("pwuserdaftar");

pass.addEventListener('keyup', function(){
    checkPassword(pass.value)
})

// var all = document.getElementById('show')

// all.addEventListener('click', function(){
//     if(all.checked){
//         pass.setAttribute('type', 'text')
//     }else {
//         pass.setAttribute('type', 'password')
//     }	
// })

function checkPassword(InputPassword){
    let bulet1 = document.querySelector('.bulet1');
    let bulet2 =  document.querySelector('.bulet2');
    let bulet3 = document.querySelector('.bulet3');

    // Jika input karakter seperti dalam tanda bracket 1
    if ((InputPassword.match(/[a-z]+/)) || (InputPassword.match(/[0-9]+/))){
        bulet1.style.backgroundColor = '#ff1b1b';
        bulet2.style.backgroundColor = '#ffffff';
        bulet3.style.backgroundColor = '#ffffff';
    }
    // Jika input karakter seperti dalam tanda bracket 3
    if ((InputPassword.match(/[0-9]+/)) && ((InputPassword.match(/[a-z]+/)))) {
        bulet1.style.backgroundColor = '#fdc200';
        bulet2.style.backgroundColor = '#fdc200';
        bulet3.style.backgroundColor = '#ffffff';
    }
    if (InputPassword.length > 8) {
        bulet1.style.backgroundColor = '#00fd37';
        bulet2.style.backgroundColor = '#00fd37';
        bulet3.style.backgroundColor = '#00fd37';
    }
    if(InputPassword.length < 1){
        bulet1.style.backgroundColor = '#ffffff';
        bulet2.style.backgroundColor = '#ffffff';
        bulet3.style.backgroundColor = '#ffffff';
    }
}