import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { VisibilityOff, Eye } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './text-field.module.scss'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  labelProps?: ComponentProps<'label'>
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, errorMessage, placeholder, type, containerProps, labelProps, ...restProps },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isShowPasswordButtonShown = type === 'password'

    const finalType = getFinalType(type, showPassword)

    const classNames = {
      root: clsx(s.root, containerProps?.className),
      field: clsx(s.field, className),
      label: clsx(s.label, labelProps?.className),
      error: clsx(s.error),
    }

    return (
      <div className={classNames.root}>
        <input
          className={classNames.field}
          placeholder={placeholder}
          ref={ref}
          type={finalType}
          {...restProps}
        />
        <label className={classNames.label}>{placeholder}</label>
        {isShowPasswordButtonShown && (
          <button
            className={s.showPassword}
            type={'button'}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <VisibilityOff /> : <Eye />}
          </button>
        )}
        <Typography.Error className={classNames.error}>{errorMessage}</Typography.Error>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
