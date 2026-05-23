export const CheckboxInput = ({ title, name, sizeClass, defaultValue }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-center text-sm">{title}</legend>

      <input type="checkbox" defaultChecked={!!defaultValue} name={name} className={`checkbox checkbox-secondary mx-auto ${sizeClass}`} />
    </fieldset>
  );
};
