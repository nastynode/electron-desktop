import { DoFormField } from '../../../main/types';

const DoFormTextField = ({
  formFieldProps,
  setValue,
  variant = 'text',
}: {
  formFieldProps: DoFormField;
  setValue: (newValue: string) => void;
  variant?: 'textarea' | 'email' | 'tel' | 'number' | 'text';
}) => {
  return (
    <div
      className="do-form-text-field"
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}
    >
      <label>
        {formFieldProps.label}
        {formFieldProps.required && <span className="required">*</span>}
      </label>
      {formFieldProps.subtitle && <small>{formFieldProps.subtitle}</small>}
      <input
        type={variant ?? 'text'}
        placeholder={formFieldProps.placeholder}
        defaultValue={formFieldProps.defaultValue as string}
        onChange={(e) => setValue(e.target.value)}
        required={formFieldProps.required}
      />
    </div>
  );
};

export default DoFormTextField;
