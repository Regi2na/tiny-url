const pool = require('../config/db');

const getUrlByCode = async (tinyUrlCode) => {
    const sql = "SELECT * FROM tinyurls WHERE tiny_url_code = ?";
    const results = await pool.query(sql, [tinyUrlCode]);
    if (results.length > 0) {
        const { original_url, tiny_url_code } = results[0];
        return ({
            originalUrl: original_url,
            tinyUrlCode: tiny_url_code,
        });    
    }
    return null;
};

const insertTinyUrl = async (originalUrl, tinyUrlCode) => {
    const sql = "INSERT INTO tinyurls (original_url, tiny_url_code) VALUES (?, ?)";
    const result = await pool.query(sql, [originalUrl, tinyUrlCode]);
    return result.insertId;
};

module.exports = {
    getUrlByCode,
    insertTinyUrl,
};