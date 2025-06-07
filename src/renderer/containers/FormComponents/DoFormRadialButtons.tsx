import { DoFormField } from '../../../main/types';

const DoFormRadialButtons = ({
  formFieldProps,
  setValue,
}: {
  formFieldProps: DoFormField;
  setValue: (option: string) => void;
}) => {
  return (
    <div className="do-form-radial-buttons">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom: '10px',
          gap: '10px',
        }}
      >
        <button className="do-form-radial-buttons__button">Button 1</button>
        <button className="do-form-radial-buttons__button">Button 2</button>
        <button className="do-form-radial-buttons__button">Button 3</button>
      </div>
    </div>
  );
};

export default DoFormRadialButtons;
