import { DoFormField } from '../../../main/types';

const DoFormSelectField = ({
  formFieldProps,
  setValue,
}: {
  formFieldProps: DoFormField;
  setValue: (option: string) => void;
}) => {
  return (
    <div
      className="do-form-select-field"
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}
    >
      <label htmlFor={formFieldProps.id}>{formFieldProps.label}</label>
      {formFieldProps.subtitle && (
        <small className="subtitle">{formFieldProps.subtitle}</small>
      )}
      <select
        id={formFieldProps.id}
        onChange={(e) => setValue(e.target.value)}
        required={formFieldProps.required}
        defaultValue="default"
      >
        <option value="default" disabled hidden>
          Select an option
        </option>
        {formFieldProps.options?.map((option, i) => (
          <option key={i} value={option.value.toLocaleString()}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DoFormSelectField;
