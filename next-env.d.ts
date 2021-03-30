/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_JWT_SECRET: string
    NEXT_PUBLIC_SERVER_URL: string
    NEXT_PUBLIC_CLIENT_EMAIL: string
  }
}
