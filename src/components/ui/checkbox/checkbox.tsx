import { ElementRef, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import { Check } from '../../../assets/icons'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, onChange, disabled, required, label, id }, ref) => {
    const classNames = {
      container: s.container,
      buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
      root: s.root,
      indicator: s.indicator,
      label: clsx(s.label, disabled && s.disabled),
    }

    return (
      <div className={classNames.container}>
        <LabelRadix.Root className={classNames.label}>
          <CheckboxRadix.Root
            ref={ref}
            className={classNames.root}
            checked={checked}
            onCheckedChange={onChange}
            disabled={disabled}
            required={required}
            id={id}
          >
            <CheckboxRadix.Indicator className={classNames.indicator}>
              <Check />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
          {label}
        </LabelRadix.Root>
      </div>
    )
  }
)
