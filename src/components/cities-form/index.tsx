import { Button, styled, TextField } from '@mui/material'
import {  useFormik  } from 'formik'
import { CitiesModel } from '../../models/cities.model'

const INITIAL_VALUES: CitiesModel = {
  name: '',
}

const CitiesForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: async (values: CitiesModel) => {
      dispatch(create(values))
    }
  });
  return (
      <StyledFrom onSubmit={formik.handleSubmit}>
        <TextField name="name" id='name' type="text" value={formik.values.name} onChange={formik.handleChange} />
        <SubmitButton variant="contained" type="submit">Find City</SubmitButton>
      </StyledFrom>
  )
} 

export default CitiesForm

const SubmitButton = styled(Button)`
  color: #fff;
`

const StyledFrom = styled('form')`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2a37ea;
  gap: 20px;
`

