var name = document.querySelector(".num-input")
var form = document.querySelector(".form")
form.addEventListener('submit', (e) =>{
		if (name.value === "hehehe"){
			console.log('User Logged')
			}
            else
            {
            	console.log(name.value)
            	e.preventDefault()
            	//messages.push("(i) Your Username Or Password Is Incorrect")
            }
                  
});