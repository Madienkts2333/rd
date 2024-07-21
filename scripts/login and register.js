document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            // Xử lý đăng nhập (giả lập)
            if (username === "user" && password === "password") {
                alert("Đăng nhập thành công!");
                window.location.href = "logout.html";
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không đúng!");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("registerUsername").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;

            // Xử lý đăng ký (giả lập)
            alert("Đăng ký thành công! Bạn có thể đăng nhập với tên đăng nhập và mật khẩu đã đăng ký.");
            window.location.href = "login.html";
        });
    }
});
