const AdminModel = require('../models/Admins');

exports.fetch_data = async (req, res, next) => {
    try {
        const admins = await AdminModel.find({});
        res.json(admins);
    } catch (err) {
        res.status(502).json({ error: 'Error while fetching data from the database' });
    }
};
