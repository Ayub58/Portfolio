//Light mode Dark mode implementation
// Fully Load DOM
document.addEventListener('DOMContentLoaded',() =>{
    const themeButton = document.getElementById('theme-toggle'); //Get the button
    themeButton.addEventListener('click', () =>{
        document.body.classList.toggle('dark-mode');

        if(document.body.classList.contains('dark-mode')){
            themeButton.textContent = 'Switch to light mode'
        }
        else{
            themeButton.textContent = 'Switch to dark mode'
        }
    });

});

//blog post
document.addEventListener('DOMContentLoaded',function(){
    const blogList = document.getElementById('blog-list');

    fetch('posts.json')
    .then(response => response.json())
    .then(posts =>{
        posts.forEach(post =>{
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postDate = document.createElement('p');
        postDate.classList.add('post-date');
        postDate.textContent = post.date;

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        //append elements to postElement
        postElement.appendChild(postTitle);
        postElement.appendChild(postDate);
        postElement.appendChild(postContent);

        //append postElement to bloglist
        blogList.appendChild(postElement);
        });
    })
    .catch(error =>console.error('Error loading blog post', error));
});