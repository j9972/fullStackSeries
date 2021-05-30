const express = require('express');
const router = express.Router();
const {Posts} = require('../models');
// Posts 이게 지금 undefine이 뜬다. 

// router.get("/",  async (req,res) => {
//     const listOfPosts = await Posts.findAll();
//     res.json(listOfPosts);
// })

console.log(Posts);

router.post("/", async (req,res) => {
    const post = req.body;
    //create없이 그냥 res.json이나 console 찍으면 데이터가 나오는데, create는 테이블에 데이터를 넣는거 같음.
    await Posts.create(post);
    res.json(post);
});


module.exports = router;