import { useReducer } from 'react';
import {
  DoForm as DoFormView,
  DoFormField,
  DoFormFieldType,
} from '../../../main/types';
import DoFormTextField from './DoFormTextField';
import DoFormSelectField from './DoFormSelectField';
import DoFormDateField from './DoFormDateField';

type FormState = Record<string, string | number | boolean>;

type Action = {
  type: 'UPDATE_FIELD';
  fieldId: string;
  value: string | number | boolean;
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.fieldId]: action.value,
      };
    default:
      return state;
  }
};

const DoFormFieldRenderer = ({
  field,
  setValue,
}: {
  field: DoFormField;
  setValue: (newValue: any) => void;
}) => {
  switch (field.type) {
    case DoFormFieldType.TEXT:
      return <DoFormTextField formFieldProps={field} setValue={setValue} />;
    case DoFormFieldType.SELECT:
      return <DoFormSelectField formFieldProps={field} setValue={setValue} />;
    case DoFormFieldType.DATE:
      return <DoFormDateField formFieldProps={field} onSelect={setValue} />;
    default:
      return <>Form field type '{field.type}' not yet implemented</>;
  }
};

const DoFormView = ({ doForm }: { doForm: DoFormView }) => {
  const [formState, dispatch] = useReducer(formReducer, {});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <form className="do-form" onSubmit={handleSubmit}>
      <h1>{doForm.title}</h1>
      <p>{doForm.description}</p>
      {doForm.fields.map((field) => (
        <DoFormFieldRenderer
          key={field.id}
          field={field}
          setValue={(newValue: any) =>
            dispatch({
              type: 'UPDATE_FIELD',
              fieldId: field.id,
              value: newValue,
            })
          }
        />
      ))}
      {/* Render each field in the form 
        doForm.fields.map((field) => (
        <DoFormFieldRenderer key={field.id} field={field} setValue={someFunctionToSetValue} />
        */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DoFormView;
