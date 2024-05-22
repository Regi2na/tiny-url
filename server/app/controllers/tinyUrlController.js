const tinyUrlModel = require('../models/tinyUrlModel');
const shortid = require('shortid');

const getUrlByCode = async (req, res) => {
    try {
        const { tinyUrlCode } = req.body;
        if (!tinyUrlCode) {
            return res.status(400)
            .json({
                meta: {
                    status: "ERROR",
                    message: "Bad request",
                },
                data: {},                
            });
        }

        const data = await tinyUrlModel.getUrlByCode(tinyUrlCode);
        if (data) {
            res.status(200)
            .json({
                meta: {
                    status: "OK",
                    message: "URL retrieved successfully",
                },
                data,
            });
        } else {
            return res.status(404)
            .json({ 
                meta: {
                    status: "ERROR",
                    message: 'URL not found',
                },
                data: {},
            });
        }
    } catch (error) {
        console.error('Error fetching URL:', error);
        res.status(500)
        .json({ 
            meta: {
                status: "ERROR",
                message: "Server error",
            },
            data: {}, 
        });
    }
};

const createTinyUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        if (!originalUrl) {
            return res.status(400)
            .json({
                meta: {
                    status: "ERROR",
                    message: "Bad request",
                },
                data: {},                
            });
        }

        const tinyUrlCode = shortid.generate();
        const insertId = await tinyUrlModel.insertTinyUrl(originalUrl, tinyUrlCode);
        res.status(201)
        .json({
            meta: {
                status: "OK",
                message: "Tiny URL created successfully",
            },
            data: {
                originalUrl,
                tinyUrlCode,
            } 
        });
    } catch (error) {
        console.error('Error inserting new URL:', error);
        res.status(500)
        .json({
            meta: {
                status: "ERROR",
                message: "Server error",
            },
            data: {},
        });
    }
};

module.exports = {
    getUrlByCode,
    createTinyUrl,
};