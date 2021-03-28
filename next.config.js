const withVideos = require('next-videos')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
}

module.exports = withImages(
  withVideos(
    withLess({
      ...withSass({
        lessLoaderOptions: {
          javascriptEnabled: true
        },
        webpack: (config, options) => {
          // config.module.rules.push({
          //   test: /\.docx$/,
          //   use: [
          //     {
          //       loader: 'docx-loader',
          //     }
          //   ]
          // })

          return config
        }
      })
    })
  )
)
