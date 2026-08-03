let button = document.getElementById("btn");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        button.innerHTML = "☀️ Light Mode";
    }
    else{
        button.innerHTML = "🌙 Dark Mode";
    }
});