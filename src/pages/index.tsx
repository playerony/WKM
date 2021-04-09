import React, { useEffect, useRef, useState } from 'react'

import Menu from '@components/HomePage/Menu/Menu.component'
import Contact from '@components/HomePage/Contact/Contact.component'
import Gallery from '@components/HomePage/Gallery/Gallery.component'
import Welcome from '@components/HomePage/Welcome/Welcome.component'
import Carousel from '@components/common/Carousel/Carousel.component'
import InstructionPage from '@components/InstructionPage/InstructionPage.component'
import HistorySlide from '@components/HomePage/HistorySlide/HistorySlide.component'

import useTimeout from '@hooks/useTimeout'

const slides = [
  {
    title: 'Historia',
    backgroundVideo: '/static/videos/history_slide_video.mp4',
    description: `Historia powstania klubu, to historia ludzi, którzy zarazili nas swoją pasją, stylem życia i miłością do motocykli. Nie sposób nie wymienić takich nazwisk jak Bartek KOSAR, Mirek BANIA czy Rafał GÓRSKI.`
  },
  {
    title: 'Pomysł',
    backgroundVideo: '/static/videos/idea_slide_video.mp4',
    description: `Sam pomysł stworzenia klubu zrodził się w ich głowach dopiero wiosną 2008 roku podczas wypadu na Słowację. Tam właśnie padły pierwsze pomysły, w tym nasza obecna nazwa.`
  },
  {
    title: 'Rozwój',
    backgroundVideo: '/static/videos/development_slide_video.mp4',
    description: `Kolejne lata przyniosły ze sobą dalszy rozwój, podjęcie współpracy i zawarcie przyjaźni z innymi klubami, w tym m.in. z Blue Knights. Udzielamy się w licznych imprezach charytatywnych, w 2012 roku przyłączyliśmy się do 20-go Finału WOŚP w Gliwicach. Od czasu założenia WKM przydarzyło się wiele bliższych i dalszych, pełnych przygód, radości, a czasami także trudnych chwil, podróży na dwóch kółkach.`
  }
]

const HomePage = (): JSX.Element => {
  const mainCarouselRef: any = useRef()
  const wrapperCarouselRef: any = useRef()

  const [page, setPage] = useState<number>(0)
  const [instructionVisibility, setInstructionVisibility] = useState<boolean>(true)

  useTimeout(() => {
    wrapperCarouselRef.current && wrapperCarouselRef.current.goTo(1)

    setTimeout(() => {
      setInstructionVisibility(false)
    }, 500)
  }, 50000)

  const onButtonClick = (): void => mainCarouselRef.current.goTo(1)

  const onSwipe = () => {
    if (instructionVisibility) {
      setTimeout(() => {
        setInstructionVisibility(false)
      }, 500)
    }
  }

  useEffect(() => {
    mainCarouselRef.current && mainCarouselRef.current.goTo(page)
  }, [page])

  const changeSlide = (index: number): void => setPage(index)

  if (instructionVisibility) {
    return (
      <Carousel onSwipe={onSwipe} dots={false} carouselRef={wrapperCarouselRef} lazyLoad="ondemand">
        <InstructionPage />
        <Carousel>
          <Welcome onButtonClick={onButtonClick} />
          {React.Children.toArray(slides.map((slide) => <HistorySlide {...slide} />))}
          <Gallery />
          <Contact />
        </Carousel>
      </Carousel>
    )
  }

  return (
    <Menu activePage={page} changeSlide={changeSlide}>
      <Carousel key="main-carousel" setPage={setPage} carouselRef={mainCarouselRef} lazyLoad="ondemand">
        <Welcome onButtonClick={onButtonClick} />
        {React.Children.toArray(slides.map((slide) => <HistorySlide {...slide} />))}
        <Gallery />
        <Contact />
      </Carousel>
    </Menu>
  )
}

export default HomePage
