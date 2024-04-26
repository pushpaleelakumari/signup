const handleRefresh = (e) => {
    e.preventDefault()
}

const handleSubmit = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let flag = false
    if (/^\w{3,}([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById("error-mail").className = "text-danger d-none";
        flag = true
    }
    else {
        document.getElementById('error-mail').className = 'text-danger d-visible'
        flag = false
    }
    if (password.length > 8) {
        document.getElementById('password-error').className = 'text-danger d-none'
        flag = true
    } else {
        document.getElementById('password-error').className = 'text-danger d-visible'
        flag = false
    }
    if (flag) {
        document.getElementById("good-to-go").className = 'text-success d-visible mb-3'
    }
}