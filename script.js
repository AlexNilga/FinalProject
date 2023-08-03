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
            cartArray.push(postsArr[index])
        })
    })
}

const createPost = (object, index) =>
    `<div class="col-lg-2 col-md-4">
            <div class="card box p-4 h-100 d-flex flex-column">
                <img class="monitor" src="${object.src}" alt="${index + 1}. ${object.model} monitor" >
                <hr class="dashed">
                <h3>${object.brand} ${object.model}</h3>
                <p>${object.description}</p>
                <p>${object.price}₴</p>
                <a href="#" class="add-to-cart btn mt-auto btn-dark">Add to cart</a>
            </div>
        </div>`

const addTitle = (titleName) =>
    `<div>
        <h1>${titleName}</h1>
    </div>
    <div class="sort mb-3">
        <select class="form-control" style="width: 14rem">
            <option>Price ↑</option>
            <option>Price ↓</option>
            <option>Best option</option>
        </select>
    </div>`

const openPost = (post) =>
    `<div>
        <img class="monitor" src="${post.src}" alt="${post.model} monitor">
        <h6 class="card-title">${post.brand} ${post.model}</h6>
        <p class="card-text">${post.price}₴</p>
        <a href="#" class="btn btn-dark btn-sm add-to-cart">Add to cart</a>
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
    document.querySelectorAll(`.sort`).forEach((button, index) => {
        button.remove()
    })
})


