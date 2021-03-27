import React, { useRef, useState } from 'react'

import Contact from '@components/HomePage/Contact/Contact.component'
import Gallery from '@components/HomePage/Gallery/Gallery.component'
import Welcome from '@components/HomePage/Welcome/Welcome.component'
import Carousel from '@components/common/Carousel/Carousel.component'
import LoadingPage from '@components/LoadingPage/LoadingPage.component'
import HistorySlide from '@components/HomePage/HistorySlide/HistorySlide.component'

import ideaSlideVideo from '@public/video/idea_slide_video.mp4'
import historySlideVideo from '@public/video/history_slide_video.mp4'
import developmentSlideVideo from '@public/video/development_slide_video.mp4'

const slides = [
  {
    title: 'Historia',
    backgroundVideo: historySlideVideo,
    description: `Historia powstania klubu, to historia ludzi, którzy zarazili nas swoją pasją, stylem życia i miłością do motocykli. Nie sposób nie wymienić takich nazwisk jak Bartek KOSAR, Mirek BANIA czy Rafał GÓRSKI.`
  },
  {
    title: 'Pomysł',
    backgroundVideo: ideaSlideVideo,
    description: `Sam pomysł stworzenia klubu zrodził się w ich głowach dopiero wiosną 2008 roku podczas wypadu na Słowację. Tam właśnie padły pierwsze pomysły, w tym nasza obecna nazwa.`
  },
  {
    title: 'Rozwój',
    backgroundVideo: developmentSlideVideo,
    description: `Kolejne lata przyniosły ze sobą dalszy rozwój, podjęcie współpracy i zawarcie przyjaźni z innymi klubami, w tym m.in. z Blue Knights. Udzielamy się w licznych imprezach charytatywnych, w 2012 roku przyłączyliśmy się do 20-go Finału WOŚP w Gliwicach. Od czasu założenia WKM przydarzyło się wiele bliższych i dalszych, pełnych przygód, radości, a czasami także trudnych chwil, podróży na dwóch kółkach.`
  }
]

const HomePage = (): JSX.Element => {
  const carouselRef: any = useRef()

  const [_, setPage] = useState<number>(0)
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false)

  const onVideoLoad = (): void => setVideoLoaded(true)

  const onButtonClick = (): void => carouselRef.current.goTo(1)

  return (
    <>
      <Carousel setPage={setPage} carouselRef={carouselRef}>
        <Welcome onVideoLoad={onVideoLoad} onButtonClick={onButtonClick} />
        {React.Children.toArray(slides.map((slide) => <HistorySlide {...slide} />))}
        <Gallery />
        <Contact />
      </Carousel>
      <LoadingPage isLoading={!videoLoaded} />
    </>
  )
}

export default HomePage
