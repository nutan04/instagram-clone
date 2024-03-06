const db = require('../database');
exports.createPost = (req, res) => {
    const { title, content, author } = req.body;
    const newItem = { title, content, author };
    const sql = 'INSERT INTO posts SET ?';
    db.query(sql, newItem, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Post created successfully', id: result.insertId });
    });
};

exports.getPost=(req, res)=>{
    const sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ data:result });
    });
// console.log("hello");
}