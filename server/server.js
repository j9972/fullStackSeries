const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// sequelize를 위해서 connecting with model folder 
const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
const commentsRouter = require('./routes/Comments');
app.use('/comments', commentsRouter);



// make a table by using sequelize
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
});

