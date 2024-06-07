export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
export type ButtonSize = 'large' | 'small' | 'default'
export type ButtonNativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  circle?: boolean
  round?: boolean
  disabled?: boolean
  nativeType?: ButtonNativeType
  autofocus?: boolean
}
export interface ButtonInstance {
  ref: HTMLButtonElement
}
