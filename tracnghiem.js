document.getElementById("submitBtn").addEventListener("click", function() {
    // Lấy giá trị của các input
    var answers = {};

    // Lựa chọn Đúng/Sai
    document.querySelectorAll('.answer_group1').forEach(function(input) {
        answers[input.name] = document.querySelector('input[name="' + input.name + '"]:checked').value;
    });

    // Chọn 1 trong 4 đáp án
    document.querySelectorAll('input[name^="group2Question"]').forEach(function(input) {
        answers[input.name] = document.querySelector('input[name="' + input.name + '"]:checked').value;
    });

    // Chọn nhiều đáp án trong
    document.querySelectorAll('input[name^="group3Question"]').forEach(function(input) {
        var checkedValues = [];
        document.querySelectorAll('input[name="' + input.name + '"]:checked').forEach(function(checkbox) {
            checkedValues.push(checkbox.value);
        });
        answers[input.name] = checkedValues;
    });

    // Trả lời tự luận
    document.querySelectorAll('textarea[name^="group4Question"]').forEach(function(input) {
        answers[input.name] = input.value;
    });

    // In ra kết quả
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Kết quả:</h2>";
    for (var question in answers) {
        if (Array.isArray(answers[question])) {
            // Nếu là mảng (ví dụ: chọn nhiều đáp án trong)
            resultDiv.innerHTML += "<p>" + question + ": " + answers[question].join(", ") + "</p>";
        } else {
            resultDiv.innerHTML += "<p>" + question + ": " + answers[question] + "</p>";
        }
    }
});
