module.exports = () => ({
  plugins: [
    require('autoprefixer')({
      browsers: ['Chrome >= 55']
    })
  ]
})
