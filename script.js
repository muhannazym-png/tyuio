<script>

let currentPage = 1;

const comments = {
    1: "cool",
    2: "cool",
    3: "cool",
    4: "cool"
};


function openPhotoBook() {
    document.getElementById("photoBookScreen").classList.add("active");

    currentPage = 1;

    updateBook();
}


function closePhotoBook() {
    document.getElementById("photoBookScreen").classList.remove("active");
}


function updateBook() {

    document.getElementById("leftPhoto").src =
        `photo(${currentPage}).jpeg`;

    document.getElementById("rightPhoto").src =
        `photo(${currentPage + 1}).jpeg`;

    document.getElementById("commentBox").classList.remove("show");

}


function nextPage() {

    if (currentPage < 3) {

        currentPage += 2;

        updateBook();

    }

}


function previousPage() {

    if (currentPage > 1) {

        currentPage -= 2;

        updateBook();

    }

}


function showComments() {

    const commentBox = document.getElementById("commentBox");
    const commentText = document.getElementById("commentText");

    commentText.textContent = comments[currentPage];

    commentBox.classList.toggle("show");

}

</script>