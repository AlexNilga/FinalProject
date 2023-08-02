const posts = document.querySelector('.posts')
const title = document.querySelector('.title')

const cartArray = []

const fillPosts = (postsArr, titleName) => {
    removePosts()
    title.innerHTML = addTitle(titleName)
    postsArr.forEach((object, index) => {
        posts.innerHTML += createPost(object, index)
    })

    document.querySelectorAll(`.add-to-cart`).forEach((div, index) => {
        div.addEventListener('click', () => {
            console.log(`tested${index}`)
            cartArray.push(postsArr[index])
        })
    })
}

const createPost = (object, index) =>
    `
<div class="card post h-3" style="width: 18rem">
    <img class="monitor" src="${object.src}" alt="${index + 1}. ${object.model} monitor" >
    <div class="card-body">
        <h6 class="card-title">${object.brand} ${object.model}</h6>
        <p class="card-text">${object.description}</p>
        <p class="card-text">${object.price}₴</p>
        <a href="#" class="btn btn-dark btn-sm add-to-cart">Add to cart</a>
    </div>
    </div>`

const addTitle = (titleName) =>
    `<h1>${titleName}</h1>`

const openPost = (post) =>
    `<div>
    <img class="monitor" src="${post.src}" alt="${post.model} monitor">
        <h6 class="card-title">${post.brand} ${post.model}</h6>
        <p class="card-text">${post.price}₴</p>
        <a href="#" class="btn btn-dark btn-sm add-to-cart">Add to cart</a>
    </div>
</div>`

const removePosts = () => {
    posts.innerHTML = ""
    title.innerHTML = ""
}
/////////////
document.querySelector(`#monitors`).addEventListener('click', () => {
    fillPosts(monitorsDB, 'Monitors')
})
document.querySelector(`#laptops`).addEventListener('click', () => {
    fillPosts(laptopsDB, 'Laptops')
})
document.querySelector(`#basket`).addEventListener('click', () => {
    fillPosts(cartArray, 'Cart')
    document.querySelectorAll(`.add-to-cart`).forEach((button, index) => {
        button.remove()
    })
})


