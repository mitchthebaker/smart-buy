// components
import CreateEmaForm from '../../components/CreateEmaForm';
import StartInterval from '../../components/StartInterval';
import StopInterval from '../../components/StopInterval';

const Landing = () => {
  return (
    <section>
      <CreateEmaForm />
      <StartInterval />
      <StopInterval />
    </section>
  );
};

export default Landing;