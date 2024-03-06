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