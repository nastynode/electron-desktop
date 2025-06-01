import { DoFormField } from '../../../main/types';

const DoFormDateField = ({
  formFieldProps,
  onSelect,
}: {
  formFieldProps: DoFormField;
  onSelect: (date: Date) => void;
}) => {
  return (
    <div
      className="do-form-date-field"
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}
    >
      <label htmlFor={formFieldProps.id}>{formFieldProps.label}</label>
      {formFieldProps.subtitle && <small>{formFieldProps.subtitle}</small>}
      <input
        type="date"
        onChange={(e) => e.target.valueAsDate && onSelect(e.target.valueAsDate)}
        defaultValue={formFieldProps.defaultValue as string}
        id={formFieldProps.id}
        required={formFieldProps.required}
      />
    </div>
  );
};

export default DoFormDateField;
