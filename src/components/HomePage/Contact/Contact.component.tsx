import axios from 'axios'
import React, { useState } from 'react'

import message from 'antd/lib/message'

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

const Contact = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)

  const onFormFinish = (values: any, resetFields: () => void) => {
    setLoading(true)

    axios
      .post('https://wkm-backend.azurewebsites.net/mail/send', values)
      .then(() => {
        message.success('Pomyślnie wysłano wiadomość :)')

        setLoading(false)

        resetFields()
      })
      .catch((error) => {
        message.error(error.message)

        setLoading(false)
      })
  }

  return (
    <StyledWrapper>
      <StyledVideo loop={true} muted={true} autoPlay={true} src="/static/video/contact_page_video.mp4" />
      <StyledVideoMask />
      <StyledContentWrapper>
        <StyledDownloadSectionWrapper>
          <Attachment toDownload="/static/download/attachment1.docx">deklaracja.docx</Attachment>
        </StyledDownloadSectionWrapper>
        <StyledContactSectionWrapper>
          <ContactForm isLoading={loading} handleFinish={onFormFinish} />
        </StyledContactSectionWrapper>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default Contact
