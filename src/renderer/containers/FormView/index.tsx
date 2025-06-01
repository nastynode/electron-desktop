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
