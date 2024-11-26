import express from "express";
import bodyParser from "body-parser";
 
const app = express();
const port = 3000;

const data = {
    posts: [{title:"First post", 
            description:"This is the description"}],
};
 
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
 
app.get("/", (req,res) => {
    res.render("index.ejs", {posts: data.posts}) ;
 
});
 
 
app.get("/composer", (req, res) => {
    res.render("composer.ejs" );
});
 
 
app.post("/submit", (req, res) => {
    let newPost = {title:req.body.title, description:req.body.description};
 
    data.posts.push(newPost);

    console.log(data)
 
    res.render ("index.ejs", {posts: data.posts});

    
});
 
 
 
 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
});