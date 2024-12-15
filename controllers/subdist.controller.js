const db = require('../models/index');

const getSubdist = async (req, res) => {
    try{
        const {username} = req.body
        const subdist = await db.Subdist.findAll({
            where: { pic: username }
        });

        res.status(200).send({
            data: subdist
        });

    }catch (err){
        console.log('Error get subdist:', err);
        return res.status(500).json({ message: err });
    }
}

module.exports = { getSubdist };

