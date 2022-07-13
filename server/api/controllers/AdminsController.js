const AdminModel = require('../models/Admins');

exports.fetch_data = async (req, res, next) => {
    try {
        const admins = await AdminModel.find({});
        res.status(200).json({ admins });
    } catch (err) {
        res.status(502).json({ error: 'Error while fetching data from the database' });
    }
};
