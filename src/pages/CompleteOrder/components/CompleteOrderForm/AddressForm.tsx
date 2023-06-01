import { useFormContext } from 'react-hook-form'
import Input from '../../../../components/Input'
import { AddressFormContainer } from './styles'

interface Errorstype {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

const AddressForm = () => {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as Errorstype
  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        className="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        rightText="Opcional"
        {...register('complement')}
        error={errors.complement?.message}
      />
      <Input
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        className="city"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        className="uf"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}

export default AddressForm
