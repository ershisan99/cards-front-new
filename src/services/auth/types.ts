export type LoginArgs = {
  email: string
  password: string
}

export type User = {
  id: string
  email: string
  name: string
  isEmailVerified: boolean
  avatar: string
}
