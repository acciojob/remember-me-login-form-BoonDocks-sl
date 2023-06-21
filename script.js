const uName = document.getElementById('username');
const pWord = document.getElementById('password');
const cBox = document.getElementById('checkbox');
const btn = document.getElementById('submit')
const name;
const password;
const check;


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


