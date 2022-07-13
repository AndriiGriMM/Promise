function Posts(params) {
  params.button.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.input.value}`)
      .then(function (response) {
        if (response.status === 200)
          getPosts()
        resset()
      })
  });

  function getPosts() {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.input.value}`)
      .then(response => response.json())
      .then(json => renderPosts(json))
  }

  function renderPosts(posts) {
    for (var i = 0; i < posts.length; i++) {
      let div = document.createElement("h2");
      let body = document.createElement("p");
      div.innerHTML = posts[i].name
      body.innerHTML = posts[i].body
      params.coments.appendChild(div)
      params.coments.appendChild(body)
    }
  }

  function resset() {
    params.coments.innerHTML = '';
  }
}

new Posts({
  input: document.querySelector('.js-input'),
  coments: document.querySelector('.coments'),
  button: document.querySelector('.btn'),
})