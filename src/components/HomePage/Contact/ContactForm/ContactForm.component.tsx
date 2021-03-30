import React from 'react'

import Form from 'antd/lib/form'

import Input from '@components/common/Input/Input.component'
import Button from '@components/common/Button/Button.component'
import TextArea from '@components/common/TextArea/TextArea.component'

import { ContactFormProps } from './ContactForm.types'

import regExpValidator from '@utilities/regExpValidator'

const baseFieldValidators = [
  () => regExpValidator(/^\s/, 'Nazwa nie może zaczynać się spacją'),
  () => regExpValidator(/\s$/, 'Nazwa nie może kończyć się spacją'),
  () => regExpValidator(/^.*\s{2,}.*$/, 'Nazwa zawiera 2 spacje pod rząd')
]

const ContactForm = ({ isLoading, handleFinish, ...formProps }: ContactFormProps): JSX.Element => {
  const [form] = Form.useForm()

  const onFinish = (values: any): void => handleFinish(values, () => form.resetFields())

  return (
    <Form {...formProps} form={form} onFinish={onFinish} autoComplete="off" style={{ width: '100%' }}>
      <Form.Item
        name="firstname"
        validateFirst={true}
        labelCol={{ span: 24, style: { padding: 0, height: 28 } }}
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Podaj swoje imię'
          },
          {
            max: 30,
            message: 'Imię jest za długie (maksymalnie 30 znaków)'
          },
          ...baseFieldValidators
        ]}
      >
        <Input name="firstname" label="Imię*" spellCheck="false" autoComplete="none" autoCorrect="off" />
      </Form.Item>
      <Form.Item
        name="lastname"
        validateFirst={true}
        labelCol={{ span: 24, style: { padding: 0, height: 28 } }}
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Podaj swoje nazwisko'
          },
          {
            max: 30,
            message: 'Nazwisko jest za długie (maksymalnie 30 znaków)'
          },
          ...baseFieldValidators
        ]}
      >
        <Input name="lastname" label="Nazwisko*" spellCheck="false" autoComplete="none" autoCorrect="off" />
      </Form.Item>
      <Form.Item
        name="email"
        validateFirst={true}
        labelCol={{ span: 24, style: { padding: 0, height: 28 } }}
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Podaj swój email'
          },
          {
            type: 'email',
            required: true,
            whitespace: true,
            message: 'Email nie jest poprawny'
          },
          ...baseFieldValidators
        ]}
      >
        <Input name="email" label="Email*" spellCheck="false" autoComplete="none" autoCorrect="off" />
      </Form.Item>
      <Input name="email" autoCorrect="off" spellCheck="false" autoComplete="off" wrapperStyles={{ display: 'none' }} />
      <Form.Item
        name="message"
        validateFirst={true}
        labelCol={{ span: 24, style: { padding: 0, height: 28 } }}
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Wpisz wiadomość'
          },
          {
            min: 10,
            message: 'Wiadomość jest za krótka (minimalnie 10 znaków)'
          },
          {
            max: 500,
            message: 'Wiadomość jest za długa (maksymalnie 500 znaków)'
          },
          ...baseFieldValidators
        ]}
      >
        <TextArea name="message" label="Wiadomość*" spellCheck="false" autoComplete="off" autoCorrect="off" />
      </Form.Item>
      <Form.Item shouldUpdate={true} labelCol={{ span: 24, style: { padding: 0, height: 28 } }}>
        {() => (
          <Button
            size="large"
            type="ghost"
            htmlType="submit"
            loading={isLoading}
            disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length > 0}
            style={{ marginTop: 20 }}
          >
            Wyślij
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default ContactForm
