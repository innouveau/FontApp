module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : 'http://localhost:8080/',
        devServer: {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          }
}