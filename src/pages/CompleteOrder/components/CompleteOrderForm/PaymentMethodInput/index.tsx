/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})

export default PaymentMethodInput

// export const PaymentMethodInput = ({
//   icon,
//   label,
//   id,
//   ...props
// }: PaymentMethodInputProps) => {
//   return (
//     <PaymentMethodContainer>
//       <input id={id} type="radio" {...props} name="paymentMethod" />
//       <label htmlFor={id}>
//         <ContentContainer>
//           {icon}
//           {label}
//         </ContentContainer>
//       </label>
//     </PaymentMethodContainer>
//   )
// }
