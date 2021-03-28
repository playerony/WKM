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

const Contact = (): JSX.Element => (
  <StyledWrapper>
    <StyledVideo loop={true} muted={true} autoPlay={true} src="/static/video/contact_page_video.mp4" />
    <StyledVideoMask />
    <StyledContentWrapper>
      <StyledDownloadSectionWrapper>
        <Attachment toDownload="/static/download/attachment1.docx">deklaracja.docx</Attachment>
      </StyledDownloadSectionWrapper>
      <StyledContactSectionWrapper>
        <ContactForm isLoading={true} />
      </StyledContactSectionWrapper>
    </StyledContentWrapper>
  </StyledWrapper>
)

export default Contact
