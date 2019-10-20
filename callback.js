

const posts = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post Two" },
]


function getPosts() {

    setTimeout(() => {
        let result = "";
        posts.forEach((post, index) => {
            result += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = result;
    }, 1000);


}

function createpost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 2000)
}

createpost({ title: "post three", body: "this is post three" }, getPosts);