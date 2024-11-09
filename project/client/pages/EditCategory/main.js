$(document).ready(function () {
    $("#header").load("../../layouts/header/index.html");
    $('#categoryForm').on('submit', function (e) {
        e.preventDefault();
        const categoryName = $('#nameCategory').val();
        const imageLink = $('#image').val();

        $.ajax({
            url: 'http://localhost:8081/api/category',
            type: 'POST',
            data: {
                name: categoryName,
                path: categoryName,
                imageURL: imageLink,
            },
            success: function (res) {
                alert(res.data);
                window.location.reload();
            },
            error: function (error) {
                console.error("Error:", error);
                alert("Failed to add category.");
            }
        });
    });
});
