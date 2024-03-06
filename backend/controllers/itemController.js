const db = require('../database');
exports.createItem = (req, res) => {
    const { name, description } = req.body;
    const newItem = { name, description };
    const sql = 'INSERT INTO items SET ?';
    db.query(sql, newItem, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Item created successfully', id: result.insertId });
    });
};

exports.getItems = (req, res) => {
    const sql = 'SELECT * FROM items';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
};

exports.updateItem = (req, res) => {
    const itemId = req.params.id;
    const { name, description } = req.body;
    const updatedItem = { name, description };
    const sql = 'UPDATE items SET ? WHERE id = ?';
    db.query(sql, [updatedItem, itemId], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Item updated successfully' });
    });
};

exports.deleteItem = (req, res) => {
    const itemId = req.params.id;
    const sql = 'DELETE FROM items WHERE id = ?';
    db.query(sql, itemId, (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Item deleted successfully' });
    });
};