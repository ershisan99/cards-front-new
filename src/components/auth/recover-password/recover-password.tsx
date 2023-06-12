import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button, Card, ControlledTextField, Typography } from '../../ui'

import s from './recover-password.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
})

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const RecoverPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography.H1 className={s.title}>Forgot your password?</Typography.H1>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField placeholder={'Email'} name={'email'} control={control} />
          </div>
          <Typography.Caption className={s.instructions}>
            Enter your email address and we will send you further instructions
          </Typography.Caption>
          <Button className={s.button} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Typography.Caption className={s.caption}>
          Did you remember your password?
        </Typography.Caption>
        <Typography.Link as={Link} to="/sign-in" className={s.signInLink}>
          Try logging in
        </Typography.Link>
      </Card>
    </>
  )
}
