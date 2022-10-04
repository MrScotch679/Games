import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { changeHighScore, changeScore, setGameStatus } from '../features/numberSlice';

import { setUserNumber } from '../features/numberSlice';

import './formArea.scss'

const FormArea = () => {

  const dispatch = useDispatch();

  return (
    <section className="left">
      <Formik
        className="left"
        initialValues = {{
          number: ''
        }}
        validationSchema = {yup.object({
          number: yup.number()
            .min(1, 'Number must be greater than or equal to 1')
            .max(20, 'Number must be less than or equal to 20')
            .required('This field is required')
        })}
        onSubmit = {({number}) => {
          dispatch(setUserNumber(number))
          dispatch(changeScore())
          dispatch(changeHighScore())
          dispatch(setGameStatus())
        }}
      >
        <Form>
          <label htmlFor="number"></label>
          <Field
            name='number' 
            className='guess' 
            placeholder='Num'
          />
          <button
            type='submit'   
            className="btn-guess check"
          >
            Check!
          </button>
          <ErrorMessage component='div' className='error-message' name='number'/>
        </Form>
      </Formik>
    </section>
  )
}

export default FormArea;