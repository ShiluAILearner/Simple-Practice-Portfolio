let form=document.querySelector("#ContactMe");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let name=document.querySelector("#name").value;
    form.textContent="Thanks, " + name + " I will contacct soon...";
});