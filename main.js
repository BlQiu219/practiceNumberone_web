document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút Gửi

    var fullName = document.getElementById("fullName").value;
    var dob = document.getElementById("dob").value;
    var cccd = document.getElementById("cccd").value;
    var address = document.getElementById("address").value;

    if (fullName !== "" && dob !== "" && cccd !== "" && address !== "") {
        window.location.href = 'tracnghiem.html'; // Chuyển trang nếu tất cả các trường đã được điền
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});