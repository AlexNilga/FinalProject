const posts = document.querySelector('.posts')
const title = document.querySelector('.title')

const cartArray = []
let cartNumber = 0

const fillPosts = (postsArr, titleName) => {
    removePosts()
    title.innerHTML = addTitle(titleName)
    title.innerHTML += addSort()
    postsArr.forEach((object, index) => {
        posts.innerHTML += createPost(object, index)
    })

    document.querySelectorAll(`.add-to-cart`).forEach((div, index) => {
        div.addEventListener('click', () => {
            cartArray.push(postsArr[index])
            document.querySelector(`.cartNumber`).innerText = ++cartNumber

        })
    })

    const selector = document.querySelector(`.sort-selector`)
    selector.addEventListener(`change`, () => {
        let sortedArr
        switch (selector.value) {
            case '1':
                sortedArr = sort(postsArr, "LowToHigh")
                fillPosts(sortedArr, titleName)
                break
            case '2':
                sortedArr = sort(postsArr, "HighToLow")
                fillPosts(sortedArr, titleName)
                break
        }
    })
}

const createPost = (object, index) =>
    `<div class="col-lg-2 col-md-4">
            <div class="card box p-4 h-100 d-flex flex-column">
                <img class="post-img" src="${object.src}" alt="${index + 1}. ${object.model} post" >
                <hr class="dashed">
                <h3>${object.brand} ${object.model}</h3>
                <p>${object.description}</p>
                <p>${object.price}₴</p>
                <a href="#" class="add-to-cart btn mt-auto btn-dark">Add to cart</a>
            </div>
        </div>`

const fillCart = (postsArr, titleName = 'Cart') => {
    removePosts()
    title.innerHTML = addTitle(titleName)
    postsArr.forEach((object, index) => {
        posts.innerHTML += createCartPost(object, index)

    })
    posts.innerHTML += `<div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" style="width: 150px" onclick="alert('You bought ${cartNumber} items')">Buy</button>
    </div>`

    document.querySelectorAll(`.delete-from-cart`).forEach((div, index) => {
        div.addEventListener('click', () => {
            cartArray.splice(index, 1)
            document.querySelector(`.cartNumber`).innerText = --cartNumber
            fillCart(cartArray)
        })
    })
}

const createCartPost = (object, index) =>
    `<div class="col-lg-2 col-md-4">
            <div class="card box p-4 h-100 d-flex flex-column">
                <img class="post-img" src="${object.src}" alt="${index + 1}. ${object.model} post" >
                <hr class="dashed">
                <h3>${object.brand} ${object.model}</h3>
                <p>${object.description}</p>
                <p>${object.price}₴</p>
                <a href="#" class="delete-from-cart btn mt-auto btn-dark">Delete</a>
            </div>
        </div>`

const addTitle = (titleName) =>
    `<div>
        <h1>${titleName}</h1>
    </div>`

const addSort = () =>
    `
    <div class="sort mb-3">
    <label>
        <select class="sort-selector" style="width: 14rem">
         <option selected>Sort</option>
            <option value="1">Price↑</option>
            <option value="2">Price↓</option>
        </select>
        </label>
    </div>`

const sort = (array, method) => {
    if (method === "LowToHigh") {
        return array.sort((a, b) => {
            return a.price - b.price
        })
    }
    if (method === "HighToLow") {
        return array.sort((a, b) => {
            return b.price - a.price
        })
    }
}

// const openPost = (post) =>
//     `<div>
//         <img class="monitor" src="${post.src}" alt="${post.model} monitor">
//         <h6 class="card-title">${post.brand} ${post.model}</h6>
//         <p class="card-text">${post.price}₴</p>
//         <a href="#" class="btn btn-dark btn-sm add-to-cart">Add to cart</a>
//     </div>`

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
    fillCart(cartArray)

})


