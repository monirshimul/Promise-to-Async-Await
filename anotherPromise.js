

const posts = [
    { name: "post one", username: "this is post one" },
    { name: "post two", username: "this is post Two" },
]


function getPosts() {

    console.log(posts)
    let result = "";
    posts.forEach((post, index) => {
        result += `<li>${post.name}</li>`;
    })
    document.body.innerHTML = result;



}

function createpost(post) {
    return new Promise((resolve, reject) => {

        posts.push(post)
        let error = false;
        if (!error) {
            resolve();
        } else {
            reject("Something Went Wrong")
        }


    });

}

async function fetchApi() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    let result = await res.json()
    console.log(result)

    let filterItems = result.map(item => {
        return {
            name: item.name,
            username: item.username
        }
    })

    posts.push(...filterItems)
    console.log("All data", posts)


}

createpost({ name: "post three", username: "this is post three" })
    .then(async () => {
        await fetchApi();
        getPosts();
    })
    .catch(err => console.log(err))