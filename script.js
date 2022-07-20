const checkbox = document.getElementById("checkbox");

const lightText = document.querySelector(".dark-mode p")



checkbox.addEventListener("change" , function() {
    
    document.body.classList.toggle("light-theme");

    if (lightText.innerHTML === "Dark Mode") {
        lightText.innerHTML = "Light Mode ";
    } else {
        lightText.innerHTML = "Dark Mode";
    }

} )