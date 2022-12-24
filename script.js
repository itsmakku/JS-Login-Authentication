//This Is Rules Button
function Show(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';
    }
};

//This Is Submit Button
function Verify() {
    var userRef = "Vipassana";
    var passRef = "MangalHo741";

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
        alert("Connexion")
    } else {
        alert("It's seem you make a mistake...")
    }
};