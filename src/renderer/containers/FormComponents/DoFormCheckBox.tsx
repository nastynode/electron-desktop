import { DoFormField } from '../../../main/types';

const DoFormCheckBox = ({
  formFieldProps,
  onSelect,
}: {
  formFieldProps: DoFormField;
  onSelect: (option: boolean) => void;
}) => {
  return (
    <div
      className="do-form-date-field"
      style={{
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <input
        type="checkbox"
        id={formFieldProps.id}
        defaultChecked={formFieldProps.defaultValue as boolean}
        onChange={(e) => onSelect(e.target.checked)}
        required={formFieldProps.required}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor={formFieldProps.id}>{formFieldProps.label}</label>
        {formFieldProps.subtitle && <small>{formFieldProps.subtitle}</small>}
      </div>
    </div>
  );
};

export default DoFormCheckBox;
