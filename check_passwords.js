function check_passwords() {
    var password_1 = document.getElementById("password_1").value;
    var password_2 = document.getElementById("password_2").value;


    if (password_1.length < 8) {
        alert("The first password is less than 8 characters.")
    } else if (password_2.length < 8) {
        alert("The second password is less than 8 characters.")
    } else if (password_1 != password_2) {
        alert("The passwords do not match.")
    } else {
        alert("The new password is valid.")
    }
}

