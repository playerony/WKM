import React from 'react'

import Attachment from './Attachment/Attachment.component'
import ContactForm from './ContactForm/ContactForm.component'

import {
  StyledVideo,
  StyledWrapper,
  StyledVideoMask,
  StyledContentWrapper,
  StyledContactSectionWrapper,
  StyledDownloadSectionWrapper
} from './Contact.styles'

import backgroundVideo from '@public/contact_page_video.mp4'

const Contact = (): JSX.Element => (
  <StyledWrapper>
    <StyledVideo loop={true} muted={true} autoPlay={true} src={backgroundVideo} />
    <StyledVideoMask />
    <StyledContentWrapper>
      <StyledDownloadSectionWrapper>
        <Attachment>Załącznik_1.doc</Attachment>
        <Attachment>Załącznik_2.doc</Attachment>
      </StyledDownloadSectionWrapper>
      <StyledContactSectionWrapper>
        <ContactForm isLoading={true} />
      </StyledContactSectionWrapper>
    </StyledContentWrapper>
  </StyledWrapper>
)

export default Contact
