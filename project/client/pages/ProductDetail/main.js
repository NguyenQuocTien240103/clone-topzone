$(document).ready(function () {
    $("#header").load("../../layouts/header/index.html");
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    if (productName) {
        $.ajax({
            url: "http://localhost:8081/api/category",
            method: "GET",
            dataType: "json",
            success: function (res) {

                const findCategory = res.data.filter(item => item.name.toLowerCase() === productName.toLowerCase());

                if (findCategory.length === 1) {
                    const idCategory = findCategory[0].id;
                    $.ajax({
                        url: `http://localhost:8081/api/product/${idCategory}`,
                        method: "GET",
                        dataType: "json",
                        success: function (res) {
                            const listProduct = res.data;
                            console.log(listProduct)
                            listProduct.forEach(itemProduct => {
                                console.log(itemProduct)
                                const productItem = `
                                <li class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                    <div class="card" style="width: 100%;">
                                        <img class="card-img-top" src="${itemProduct.imageURL}"
                                            alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title text-center">${itemProduct.name}</h5>
                                            <p class="card-text">${itemProduct.price}đ</p>
                                        </div>
                                    </div>
                                </li>
                                `;
                                $('#card_detail').append(productItem);
                            });

                        },
                        error: function (xhr, status, error) {
                            console.error('Lỗi khi lấy chi tiết sản phẩm:', error);
                        }
                    });
                }
                else {
                    console.error('Không tìm thấy sản phẩm:', productName);
                }
            },
            error: function (xhr, status, error) {
                console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            }
        });
    }
});