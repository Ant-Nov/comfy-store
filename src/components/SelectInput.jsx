export const SelectInput = ({ defaultValue, title, name, sizeClass='', options }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-sm">{title}</legend>

      <select
        id={name}
        defaultValue={defaultValue}
        className={`select ${sizeClass}`}
        name={name}
      >
        {
          options.map(option => (
            <option
              key={option}
              value={option}
            >{option}</option>
          ))
        }
      </select>
    </fieldset>

  );
};