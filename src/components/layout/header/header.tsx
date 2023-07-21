import { Link, useNavigate } from 'react-router-dom'

import { Logo, PersonOutline } from '../../../assets/icons'
import Logout from '../../../assets/icons/logout'
import { Button, Typography } from '../../ui'
import { Avatar } from '../../ui/avatar/avatar'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '../../ui/dropdown'

import s from './header.module.scss'

type HeaderProps = {
  isAuth: boolean
  userInfo?: {
    name: string
    avatar?: string
    email: string
  } | null
  onSignOut?: () => void
}
export const Header = ({ isAuth, userInfo, onSignOut }: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <header className={s.header}>
      <Link to={'/'} className={s.logoLink}>
        <Logo />
      </Link>
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
          <DropdownItem>
            <div className={s.userInfoContainer}>
              <Avatar src={userInfo?.avatar} />
              <div className={s.userDetails}>
                <Typography variant="subtitle2">{userInfo?.name}</Typography>
                <Typography variant="caption" className={s.userEmail}>
                  {userInfo?.email}
                </Typography>
              </div>
            </div>
          </DropdownItem>
          <DropdownItemWithIcon
            icon={<PersonOutline />}
            text="Profile"
            onSelect={() => navigate('/profile')}
          />
          <DropdownItemWithIcon icon={<Logout />} text="Sign out" onSelect={onSignOut} />
        </Dropdown>
      )}
      {!isAuth && <Button variant="primary">Sign In</Button>}
    </header>
  )
}
