const db = require('../models/index');

const getChiller = async (req, res) => {
    try{
        const {subdist_id} = req.body
        // const chiller = await db.sequelize.query(`SELECT chiller_id, outlet_id, pic FROM public.m_chiller m WHERE m.subdist_id = '${subdist_id}'`)

        const chiller = await db.Chiller.findAll({
            where: { subdist_id: subdist_id }
        });

        res.status(200).send({
            data: chiller
        });

    }catch (err){
        console.log('Error get chiller:', err);
        return res.status(500).json({ message: err });
    }
}

module.exports = { getChiller };

