async function getTodos() {
    let response = await fetch("todos.json");
    let data = await response.json()  //.then(data=>console.log("data", data));
    return data
}

getTodos().then(valami => console.log("valami", valami))


const get3todos = async () => {
    let response1 = await fetch("todos/high.json");
    let data1 = await response1.json()
    console.log("data", data1)

    let response2 = await fetch("todos/medium.json");
    let data2 = await response1.json()
    console.log("data", data2)

    let response3 = await fetch("todos/low.json");
    let data3 = await response1.json()
    console.log("data", data3)
}
get3todos();