export const FormInput = ({ title, name, type="text", sizeClass='', defaultValue='' }) => {
  return (
    <fieldset className="fieldset w-full">
      <legend className="fieldset-legend text-sm">{title}</legend>
      <input type={type} defaultValue={defaultValue} className={`input w-full ${sizeClass}`} name={name} aria-label={title} />
    </fieldset>
  );
};