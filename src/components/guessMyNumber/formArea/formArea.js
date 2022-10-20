import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { changeHighScore, changeScore, setGameStatus, setUserNumber } from '../features/numberSlice';

import './formArea.scss'

const FormArea = () => {

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        className="gmn__left"
        initialValues = {{
          number: ''
        }}
        validationSchema = {yup.object({
          number: yup.number()
            .min(1, 'Number must be greater than or equal to 1')
            .max(20, 'Number must be less than or equal to 20')
            .required('This field is required')
        })}
        onSubmit = {({number}, {resetForm}) => {
          dispatch(setUserNumber(number))
          dispatch(changeScore())
          dispatch(changeHighScore())
          dispatch(setGameStatus())
          resetForm()
        }}
      >
        <Form>
          <label htmlFor="number"></label>
          <Field
            name='number' 
            className='gmn__guess' 
            placeholder='Num'
          />
          <button
            type='submit'   
            className="btn-guess"
          >
            Check!
          </button>
          <ErrorMessage component='div' className='gmn__error-message' name='number'/>
        </Form>
      </Formik>
    </>
  )
}

export default FormArea;