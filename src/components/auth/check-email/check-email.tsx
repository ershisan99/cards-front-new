import { Link } from 'react-router-dom'

import { Email } from '../../../assets/icons'
import { Button, Card, Typography } from '../../ui'

import s from './check-email.module.scss'

type Props = {
  email: string
}
export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.card}>
      <Typography.H1 className={s.title}>Check your email</Typography.H1>
      <div className={s.iconContainer}>
        <Email />
      </div>
      <Typography.Caption className={s.instructions}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We've sent an e-mail with instructions to {email}
      </Typography.Caption>
      <Button fullWidth as={Link} to={'/sing-in'}>
        Back to Sign in
      </Button>
    </Card>
  )
}
