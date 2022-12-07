const TextField = ({ 
  type, 
  name, 
  value, 
  label, 
  placeholder, 
  onChange 
}) => {
  return (
    <section>
      <div>
        <label> { label } </label>
        <input 
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </section>
  );
};

export default TextField;