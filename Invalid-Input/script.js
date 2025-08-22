function validateInput(){
    let inputField = document.getElementById("inputField");
    let inputvalue = inputField.value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if(inputvalue === ""){
        errorMessage.style.visibility = "visible";
        inputField.classList.add("shake");

        setTimeout(()=>{
            errorMessage.style.visibility = "hidden";
            inputField.classList.remove("shake");
        }, 1000);
    }
    else{
        window.alert("Input is valid");
    }
}