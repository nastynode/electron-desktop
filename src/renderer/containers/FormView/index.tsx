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
      required: true, // Default to today
    },
    {
      id: 'field-4',
      type: DoFormFieldType.CHECKBOX,
      label: 'Option 1',
      subtitle: 'This is an optional checkbox',
      defaultValue: true,
    },
    {
      id: 'field-5',
      type: DoFormFieldType.CHECKBOX,
      label: 'Option 2',
    },
    {
      id: 'field-6',
      type: DoFormFieldType.NUMBER,
      label: 'Quantity',
      placeholder: 'Enter your comments here',
      required: false,
    },
    {
      id: 'field-7',
      type: DoFormFieldType.EMAIL,
      label: 'Email',
      placeholder: 'Enter your email address',
      required: true,
    },
    {
      id: 'field-8',
      type: DoFormFieldType.PHONE,
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
      required: false,
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
