function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    const featuredComics = [
        { title: "BIỆT ĐỘI LÍNH CỨU HỎA", description: "Chapter 304", image: "assets/images/BIỆT ĐỘI LÍNH CỨU HỎA.jpg" },
        { title: "ĐỨA CON THẦN CHẾT", description: "Chapter 214", image: "assets/images/ĐỨA CON THẦN CHẾT.jpg" },
        { title: "Dai Dark", description: "Chapter 15", image: "assets/images/Dai Dark.jpg" },
    ];

    const latestComics = [
    ];

    function displayComics(containerId, comics) {
        const container = document.getElementById(containerId);
        const comicsContainer = container.querySelector('.comics-container');
        comics.forEach(comic => {
            const comicElement = document.createElement('div');
            comicElement.classList.add('comic');
            comicElement.innerHTML = `
                <img src="${comic.image}" alt="${comic.title}">
                <h3>${comic.title}</h3>
                <p>${comic.description}</p>
            `;
            comicsContainer.appendChild(comicElement);
        });
    }

    displayComics('featured', featuredComics);
    displayComics('latest', latestComics);
});

// Get the button:
let mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

// Lấy tất cả các phần tử truyện
var comics = document.getElementsByClassName("comic");

// Thêm sự kiện nhấp cho từng phần tử truyện để chuyển hướng đến trang chi tiết
Array.prototype.forEach.call(comics, function(comic) {
    comic.onclick = function() {
        var url = this.getAttribute("data-url");
        window.location.href = url;
    }
});
