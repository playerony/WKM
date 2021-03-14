import React from 'react'

import homeVideo from '@public/home_page_video.mp4'

const HomePage = (): JSX.Element => (
  <section>
    <video src={homeVideo} autoPlay={true} muted={true} loop={true} />
  </section>
)

export default HomePage
