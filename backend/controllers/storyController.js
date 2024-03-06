const db = require('../database');

exports.createStory=(req,res)=>{
    const {  image, title } = req.body;
    const newItem = { image, title };
    const sql = 'INSERT INTO stories SET ?';
    db.query(sql, newItem, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Story created successfully', id: result.insertId });
    });
}


exports.getStory=(req,res)=>{
    const sql = 'SELECT * FROM stories';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ data:result });
    });
}


exports.createStoryHeighlight=(req,res)=>{
    const {  profileimage, profilename, storyimage,totallike,comments,totalcomment,time } = req.body;
    const newItem = { profileimage, profilename, storyimage,totallike,comments,totalcomment,time };
    const sql = 'INSERT INTO profiles SET ?';
    db.query(sql, newItem, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Post created successfully', id: result.insertId });
    });
}

exports.getStoryHeighlight=(req,res)=>{
    const sql = 'SELECT * FROM profiles';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ data:result });
    });
}


exports.createSuggestion = (req,res)=>{
    const { profile_img, followed_by, count,profile_name } = req.body;
    const newItem = { profile_img, followed_by, count ,profile_name};
    const sql = 'INSERT INTO suggestions SET ?';
    db.query(sql, newItem, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Suggestion created successfully', id: result.insertId });
    });
}

exports.getSuggestion = (req,res)=>{
    const sql = 'SELECT * FROM suggestions';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ data:result });
    });
}