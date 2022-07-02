function menu() {
    let menuDisplay =document.querySelector(".mobileMenuDisplay");
    if (menuDisplay.style.display == "flex") {
        menuDisplay.style.display = "none";
    }else{
        menuDisplay.style.display = "flex";
    }
    
}
function theme() {
    let bodyTheme = document.querySelector("body");
    let headerTheme = document.querySelector("#header");
    let headerBlurTheme = document.querySelector("#headerblur");
    let contentBarTheme = document.querySelector(".topfullwidth");
    let contentTheme = document.querySelector("#content");
    bodyTheme.classList.toggle("lightThemeBody");
    headerTheme.classList.toggle("lightThemeHeader");
    headerBlurTheme.classList.toggle("lightThemeHeaderBlur");
    contentBarTheme.classList.toggle("contentBackgroundLight");
    contentTheme.classList.toggle("contentTextLight")
    let themeButton = document.querySelector(".material-symbols-outlined");
    console.log(themeButton.innerHTML);
    if (themeButton.innerHTML == "dark_mode") {
        themeButton.innerHTML = "light_mode";
    }else{
        themeButton.innerHTML = "dark_mode";
    }
}