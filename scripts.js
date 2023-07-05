function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

let state = 0

function toggleMenu() {
    if (state == 0){
        state = 1;
        openNav();
    } else if (state == 1) {
        state = 0
        closeNav();
    }
}


