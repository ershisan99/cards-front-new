import { forwardRef } from 'react'

import { Logo } from '../../../assets/icons'
import { Button, Typography } from '../../ui'
import { Avatar } from '../../ui/avatar/avatar'
import { Dropdown, DropdownItemWithIcon } from '../../ui/dropdown'

import s from './header.module.scss'

type HeaderProps = {
  isAuth: boolean
  userInfo?: {
    name: string
    avatar: string
    email: string
  }
}
export const Header = ({ isAuth, userInfo }: HeaderProps) => {
  return (
    <header className={s.header}>
      <Logo />
      {isAuth && (
        <Dropdown
          trigger={
            <button className={s.userMenuTrigger}>
              <Typography variant="subtitle1" className={s.userName}>
                {userInfo?.name}
              </Typography>
              <Avatar src={userInfo?.avatar} name={userInfo?.name} />
            </button>
          }
        >
          <DropdownItemWithIcon icon={<Logo />} text="Изменить" onSelect={() => {}} />
        </Dropdown>
      )}
      {!isAuth && <Button variant="primary">Sign In</Button>}
    </header>
  )
}
