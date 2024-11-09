$(document).ready(function () {
    $("#header").load("../../layouts/header/index.html");
    // call api to show list category
    $.ajax({
        url: "http://localhost:8081/api/category",
        method: "GET",
        dataType: "json",
        success: function (res) {
            const listCategory = res.data;
            $("#categorySelect").empty();
            listCategory.forEach((item) => {
                const listItem = `
                    <option value=${item.id}>${item.name}</option>
                `;
                $("#categorySelect").append(listItem);
            });
        },
        error: function (xhr, status, error) {
            console.error('Ajax error:', error);
        }
    });
    // call api post product
    $('#productForm').on('submit', function (e) {
        e.preventDefault();

        // Lấy giá trị của categorySelect
        const selectIdCategory = $('#categorySelect').val();
        const productName = $('#nameProduct').val();
        const imageLink = $('#image').val();
        const productPrice = $('#price').val();
        $.ajax({
            url: 'http://localhost:8081/api/product',
            type: 'POST',
            data: {
                idCategory: selectIdCategory,
                name: productName,
                imageURL: imageLink,
                price: productPrice,
            },
            success: function (res) {
                alert(res.data);
                window.location.reload();
            },
            error: function (error) {
                console.error("Error:", error);
                alert("Failed to add product.");
            }
        });
    });

});