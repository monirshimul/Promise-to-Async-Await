
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`makeing request to ${location}`)
        if (location === "Google") {
            resolve(`${location} says hi`)
        } else {
            reject('we only talk to google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing Response')
        resolve(`Extra info + ${response}`)

    })
}

// makeRequest('Google').then(response => {
//     console.log('respone reccived')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log("Resolve Result :" + processedResponse)
// }).catch(err => {
//     console.log(err)
// })


/////////////////////Async Await calling from the same function //////////////

async function callAsync() {
    try {
        let response = await makeRequest('Google')
        console.log('respone reccived')
        //document.body.innerHTML = response
        let processedResponse = await processRequest(response)
        console.log("Resolve Result :" + processedResponse)
        document.body.innerHTML = processedResponse
    } catch (error) {
        console.log(error)
    }


}
callAsync()
