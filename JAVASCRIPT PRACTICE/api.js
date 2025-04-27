//CRUD application/ Request/API
//5 common api
let blogs = [
    {id:1,name:"Ayush",title:"holiday", desc: "Lorem3"},
    {id:1,name:"Aayash",title:"dalle", desc: "Lorem3"},
    {id:3,name:"salin",title:"jhalle", desc: "Lorem3"},
]
// GETALL
app.get(
    "/blogs/",
    (res,req) => {
        return res.status(200).json(
            {
                "success" : true,
                "blogs": blogs,
                "message": "Data fetched"
            }
        )
    }
)
// GET ONE
// ADD
//UPDATE
//DELETE

