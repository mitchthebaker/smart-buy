import { useCallback, useState } from 'react';

const useFormHandler = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(({ target: { name, value } }) => {
    setValues(prevState => ({ ...prevState, error: '', [name]: value }));
  }, []);

  return { values, setValues, handleChange };
};

export default useFormHandler;