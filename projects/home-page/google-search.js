const searchInput = document.getElementById("searchInput");

function isUrl(text) {
    return text.includes(".") && !text.includes(" ");
}

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const query = searchInput.value.trim();

        if (query === "") {
            return;
        }

        if (isUrl(query)) {
            const url = query.startsWith("http://") || query.startsWith("https://")
                ? query
                : "https://" + query;

            window.location.href = url;
        } else {
            const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
            window.location.href = searchUrl;
        }
    }
});
