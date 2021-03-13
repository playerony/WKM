const withVideos = require('next-videos')

module.exports = withVideos({
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
})
