import React, { useState } from 'react'

import Welcome from '@components/HomePage/Welcome/Welcome.component'
import LoadingPage from '@components/LoadingPage/LoadingPage.component'

const HomePage = (): JSX.Element => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false)

  const onVideoLoad = (): void => setVideoLoaded(true)

  return (
    <section>
      <Welcome onVideoLoad={onVideoLoad} />
      <LoadingPage isLoading={!videoLoaded} />
    </section>
  )
}

export default HomePage
