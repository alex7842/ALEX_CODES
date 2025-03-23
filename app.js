document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Populate blog list
    const blogList = document.getElementById('blog-list');
    blogData.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = entry.title;
        li.addEventListener('click', () => renderContent(index));
        blogList.appendChild(li);
    });

    // Render initial content
    function renderContent(index) {
        const blogContent = document.getElementById('blog-content');
        blogContent.innerHTML = renderBlogEntry(blogData[index]);
    }

    // Show first blog entry by default
    renderContent(0);
});
