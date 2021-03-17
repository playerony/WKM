import React, { useState, useEffect } from 'react'

import History from '@components/HomePage/History/History.component'
import Welcome from '@components/HomePage/Welcome/Welcome.component'
import LoadingPage from '@components/LoadingPage/LoadingPage.component'

import useEventListener from '@hooks/useEventListener'

const PAGES = 1

const HomePage = (): JSX.Element => {
  const [page, setPage] = useState<number>(0)
  const [lastScrollTop, setLastScrollTop] = useState<number>(0)
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false)

  const onVideoLoad = (): void => setVideoLoaded(true)

  useEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const isScrollTop = scrollTop > lastScrollTop

    if (isScrollTop && page < PAGES) {
      setPage(page + 1)
    } else if (!isScrollTop && page > 0) {
      setPage(page - 1)
    }

    setLastScrollTop(scrollTop)
  })

  useEffect(() => {
    window.scrollTo({
      left: 0,
      behavior: 'smooth',
      top: window.outerHeight * page
    })
  }, [page])

  return (
    <section>
      <Welcome onVideoLoad={onVideoLoad} />
      <History />
      <LoadingPage isLoading={!videoLoaded} />
    </section>
  )
}

export default HomePage
