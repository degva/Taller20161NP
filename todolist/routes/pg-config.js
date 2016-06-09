var pgConn = {
  // have in mind that changing these values on-the-fly
  // will make the pg-promise reconnect
  getConnObj : function() {
    return {
      host: 'localhost',
      port: 5432,
      database: 'cs_univ',
      user: 'postgres'
    }
  }
}
module.exports = pgConn;
