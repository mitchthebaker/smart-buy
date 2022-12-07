import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import useFormHandler from '../../hooks/useFormHandler';

import Button from '../Button';
import TextField from '../TextField';
import Spinner from 'react-spinkit';

const inputFields = [
  {
    type: 'text',
    name: 'ticker',
    label: 'Enter ticker',
    placeholder: 'Enter ticker value (SPY, SPX, etc.)'
  },
  {
    type: 'text',
    name: 'interval',
    label: 'Select an interval',
    placeholder: 'Enter an interval (1min, 5min, etc.)'
  },
  {
    type: 'text',
    name: 'timePeriod',
    label: 'Select a time period',
    placeholder: 'Enter a time period (13, 63, etc.)'
  }
];

const CreateEmaForm = () => {
  const [loaded, setLoaded] = useState(false);
  const { values, setValues, handleChange } = useFormHandler({
    ticker: '',
    interval: '',
    timePeriod: '',
    error: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    const parameters = {
      ticker: values.ticker,
      interval: values.interval,
      timePeriod: values.timePeriod
    };
    console.log(parameters);

    // if any fields are empty, display an error 
    const emptyFields = Object.keys(parameters).some(field => !values[field]);
    console.log(emptyFields);

    if(emptyFields) {
      setValues(prevState => ({
        ...prevState,
        error: 'Please fill out all fields!'
      }));
      return;
    }

    axios.post(`${process.env.REACT_APP_API_GATEWAY_URI}/api/pollEma`, parameters)
      .then(result => {
        const data = result.data;
        console.log(data);
      })
      .catch(err => {
        console.error(`${err}`);
        setValues(prevState => ({
          ...prevState,
          error: err.toString()
        }));
      });
  }, [values, setValues]);

  return (
    <form onSubmit={handleSubmit}>
      {!loaded ? (
        <Spinner name='folding-cube' />
      ) : (
        <>
          {inputFields.map(({ type, name, label, placeholder }) => (
            <TextField 
              key={name}
              type={type}
              name={name}
              value={values[name]}
              label={label}
              placeholder={placeholder}
              onChange={handleChange}
            />
          ))}
          <Button>
            <span> Poll EMA </span>
          </Button>
          {values.error && <p> { values.error } </p>}
        </>
      )}
    </form>
  );
};

export default CreateEmaForm;