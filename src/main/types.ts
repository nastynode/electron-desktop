export type DoForm = {
  id: string;
  title: string;
  description: string;
  fields: DoFormField[];
};

export enum DoFormFieldType {
  TEXT = 'TEXT', //
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  SELECT = 'SELECT', //
  CHECKBOX = 'CHECKBOX',
  RADIO = 'RADIO',
  TEXTAREA = 'TEXTAREA',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
}

export type DoFormFieldOption = {
  label: string;
  value: string | number | boolean;
};

export type DoFormField = {
  id: string; //each one needs a unique ID so that we can update the value of the field in the parent object
  type: DoFormFieldType;
  label: string;
  subtitle?: string;
  placeholder?: string;
  options?: DoFormFieldOption[]; // For SELECT, RADIO, CHECKBOX
  required?: boolean;
  defaultValue?: string | number | boolean; // For TEXT, NUMBER, CHECKBOX
  validation?: [
    /**
     * {
     *   type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern';
     *   value: string | number | RegExp;
     *   message: string; // Error message to display if validation fails
     * }
     */
  ]; // TODO
};
