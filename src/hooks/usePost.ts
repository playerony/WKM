import axios from 'axios'
import jwt from 'jsonwebtoken'

const generateToken = (): string => jwt.sign({ code: process.env.NEXT_PUBLIC_CLIENT_EMAIL }, process.env.NEXT_PUBLIC_JWT_SECRET)

const usePost = (url: string) => {
  const sendPostRequest = <T>(data: T) =>
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, data, { headers: { 'authorization-key': generateToken() } })

  return { sendPostRequest }
}

export default usePost
