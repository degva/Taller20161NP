var pgConn = {
  // have in mind that changing these values on-the-fly
  // will make the pg-promise reconnect
  getConnObj : function() {
    return {
      host: '192.168.182.128',
      port: 5432,
      database: 'postgres',
      user: 'degva'
    }
  }
}
module.exports = pgConn;
