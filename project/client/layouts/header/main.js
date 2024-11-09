$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8081/api/category",
        method: "GET",
        dataType: "json",
        success: function (res) {
            const listCategory = res.data;
            $("#navbar_category").empty();
            listCategory.forEach((item) => {
                const listItem = `
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page"
                           href="../../../client/pages/ProductDetail/ProductDetail.html?product=${item.name}">
                           ${item.name}
                        </a>
                    </li>
                `;
                $("#navbar_category").append(listItem);
            });
        },
        error: function (xhr, status, error) {
            console.error('Ajax error:', error);
        }
    });
});