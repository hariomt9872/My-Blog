const blogPosts = [
    { title: "How to Build a Website", date: "March 22, 2025", content: "Learn the basics of web development..." },
    { title: "Top JavaScript Tips", date: "March 20, 2025", content: "Improve your JavaScript skills with these tips..." }
];
const postContainer = document.getElementById("posts");
blogPosts.forEach(post => {
    postContainer.innerHTML += `
        <div class="post">
            <h2><a href="#">${post.title}</a></h2>
            <p><strong>${post.date}</strong></p>
            <p>${post.content}</p>
        </div>`;
});
