document.addEventListener('DOMContentLoaded', function () {
    // Select all question elements
    var questions = document.querySelectorAll('.question');
    var xIcons = document.querySelectorAll('.fa-circle-xmark');

    // Loop through each question element
    questions.forEach(function (question) {
        // Add click event listener to each question
        question.addEventListener('click', function () {
            // Find the corresponding answer element
            var answer = question.nextElementSibling;

            // Show the answer
            document.querySelectorAll('.ans').forEach(function (ans) {
                ans.style.display = 'none';
            });
            answer.style.display = 'block';
        });
    });

    // Loop through each X icon and add click event listener
    xIcons.forEach(function (xIcon) {
        xIcon.addEventListener('click', function () {
            // Hide all answers
            document.querySelectorAll('.ans').forEach(function (ans) {
                ans.style.display = 'none';
            });
        });
    });
});
