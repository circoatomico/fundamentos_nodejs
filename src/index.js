const express = require("express")
const app     = express();

// Para poder trabalhar com JSON vindo dos Body Params;
app.use(express.json());

app.get("/courses", (request, response) => {
    return response.json(["Curso 1" , "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response) => {
    const { id } = request.params
    console.log(id)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response) => {
    // const {id} = request.body
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
    // const {id} = request.body
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.listen(3333)