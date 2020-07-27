console.log("Fetch API");

async function getApi() {
    const Api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(Api,"API")
    const json = await Api.json();
    console.log(json, "json");
}

// grtApi()

async function postApi() {
    const Api = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title: 'Practices Post Api',
            body: 'Javascript',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    console.log(Api,"Api");
    const json = await Api.json();
    console.log(json, "json");
}

postApi();

setTimeout(() => {
    console.log("Hellow world 1");
}, 2000);
console.log("Hellow world 2");
console.log("Hellow world 3");