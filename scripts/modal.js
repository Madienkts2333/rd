// Lấy modal
var modal = document.getElementById("comic-modal");

// Lấy nút đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấp vào nút đóng, đóng modal
span.onclick = function() {
    modal.style.display = "none";
}

// Khi người dùng nhấp bên ngoài modal, đóng modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Lấy tất cả các phần tử truyện
var comics = document.getElementsByClassName("comic");

// Thêm sự kiện nhấp cho từng phần tử truyện để mở modal với thông tin chi tiết
Array.prototype.forEach.call(comics, function(comic) {
    comic.onclick = function() {
        var title = this.getAttribute("data-title");
        var author = this.getAttribute("data-author");
        var chapter = this.getAttribute("data-chapter");
        var description = this.getAttribute("data-description");
        var link = this.getAttribute("data-link");

        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-author").innerText = "Tác giả: " + author;
        document.getElementById("modal-chapter").innerText = "Chapter: " + chapter;
        document.getElementById("modal-description").innerText = description;

        var readButton = document.getElementById("read-button");
        readButton.setAttribute("data-link", link);

        modal.style.display = "block";
    }
});

// Thêm sự kiện nhấn nút Đọc truyện
document.getElementById("read-button").onclick = function() {
    var link = this.getAttribute("data-link");
    window.location.href = link;
}
