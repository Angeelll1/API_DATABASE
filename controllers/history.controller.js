const db = require('../models/index');

const history = async (req, res) => { 
    const { subdist_id, start_date, end_date } = req.query; 
    try {

        let filterQuery = '';
        if (subdist_id) {
            filterQuery += ` AND tcd.subdist_id = ${subdist_id}`;
        }
        if (start_date && end_date) {
            filterQuery += ` AND tcd.send_date BETWEEN '${start_date}' AND '${end_date}'`;
        }


        // Menjalankan query untuk mengambil data dari t_chiller_detection
       const [history] = await db.sequelize.query(`
            SELECT tcd.*, ms.subdist_name
            FROM t_chiller_detection tcd
            JOIN m_subdist ms ON tcd.subdist_id = ms.subdist_id
            JOIN m_chiller mc ON tcd.chiller_id = mc.chiller_id
            WHERE 1=1 ${filterQuery}`);

        res.status(200).send({
            data: history    // Jika menggunakan PostgreSQL, gunakan rows untuk hasil query
        });

    } catch (err) {
        console.log('Error get history:', err); 
        return res.status(500).json({ message: err.message });
    }
};


module.exports = { history };

