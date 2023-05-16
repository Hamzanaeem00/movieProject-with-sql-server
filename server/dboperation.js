const config  = require('./dbConfig')
const sql = require('mssql');

const getCustomers  = async ()=>{
    try {
        let pool = await sql.connect(config)
        console.log("sql server connected...");
       
        
    } catch (error) {

        console.log("mathus-error",error);
    }
}
const  getdata_withQuery = async  () => {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`SELECT *  FROM moviescustomerss `);
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }


  const createData = async (movie) => {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
        .input('id', sql.Int, movie.id)
        .input('name', sql.NVarChar(50), movie.name)
        .input('email', sql.NVarChar(50), movie.email)
        .input('contact', sql.NVarChar(50), movie.contact)
        .input('movie', sql.NVarChar(50), movie.movie)
        .query('INSERT INTO moviescustomerss (id, name, email, contact, movie) VALUES (@id, @name, @email, @contact, @movie)');
      return res.rowsAffected;
    } catch (error) {
      console.log('mathus-error: ', error);
      throw error;
    }
  };
  


module.exports ={
    getCustomers: getCustomers,
    getdata_withQuery:getdata_withQuery,
    // createCustomer: createCustomer
    // createdata_withQuery:createdata_withQuery,
    createData: createData,
}