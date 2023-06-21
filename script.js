let uName = document.getElementById('username');
let pWord = document.getElementById('password');
let cBox = document.getElementById('checkbox');
let btn = document.getElementById('submit')
let name;
let password;
let check;


uName.addEventListener('input', () =>{
	name = uName.value;
});
pWord.addEventListener('input',() =>{
	password = pWord.value;
});

cBox.addEventListener('input',() => {
	check = cBox.checked
});

btn.addEventListener('click', () => {
    if(check){
      localStorage.setItem('username',name);
      localStorage.setItem('password',password);
    }
    alert(`Logged in as ${name}`);
});


