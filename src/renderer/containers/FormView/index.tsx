import { DoForm, DoFormFieldType } from '../../../main/types';
import DoFormView from '../FormComponents/DoFormView';

const defaultForm: DoForm = {
  id: 'default-form',
  title: 'Default Form',
  description: 'This is a default form description.',
  fields: [
    {
      id: 'field-1',
      type: DoFormFieldType.TEXT,
      label: 'Name',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      id: 'field-2',
      type: DoFormFieldType.SELECT,
      label: 'Country',
      options: [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'UK', label: 'United Kingdom' },
      ],
      required: true,
    },
    {
      id: 'field-3',
      type: DoFormFieldType.DATE,
      label: 'Date of Birth',
      subtitle: 'Select your date of birth',
      required: true,
      defaultValue: new Date().toISOString().split('T')[0], // Default to today
    },
    {
      id: 'field-4',
      type: DoFormFieldType.TEXTAREA,
      label: 'Comments',
      placeholder: 'Enter your comments here',
    },
  ],
};

const FormView = () => {
  return (
    <div className="form-view">
      <DoFormView doForm={defaultForm} />
    </div>
  );
};

export default FormView;
