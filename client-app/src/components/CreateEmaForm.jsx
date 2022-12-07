import { useState, useEffect } from 'react';
import useFormHandler from '../hooks/useFormHandler';

const CreateEmaForm = () => {
  const [loaded, setLoaded] = useState(false);
  const { values, onChange } = useFormHandler({
    ticker: '',
    interval: '',
    timePeriod: '',
    error: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  });

  return (
    <form>

    </form>
  );
};

export default CreateEmaForm;