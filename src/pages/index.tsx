import React, { useRef, useState } from 'react'

import Idea from '@components/HomePage/Idea/Idea.component'
import History from '@components/HomePage/History/History.component'
import Welcome from '@components/HomePage/Welcome/Welcome.component'
import Carousel from '@components/common/Carousel/Carousel.component'
import LoadingPage from '@components/LoadingPage/LoadingPage.component'

const HomePage = (): JSX.Element => {
  const carouselRef: any = useRef()

  const [page, setPage] = useState<number>(0)
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false)

  const onVideoLoad = (): void => setVideoLoaded(true)

  const onButtonClick = (): void => carouselRef.current.goTo(1)

  return (
    <>
      <Carousel setPage={setPage} currentPage={page} carouselRef={carouselRef}>
        <Welcome onVideoLoad={onVideoLoad} onButtonClick={onButtonClick} />
        <History />
        <Idea />
      </Carousel>
      <LoadingPage isLoading={!videoLoaded} />
    </>
  )
}

export default HomePage
