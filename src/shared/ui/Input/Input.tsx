import './Input.scss';

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
}

interface IInputProps {
  id: string;
  type: InputType;
  label: string;
  value: string | number;
  onVary: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, id, label, value, onVary }: IInputProps) {
  return (
    <div className="app-input-wrapper">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className="app-input"
        type={type}
        value={value}
        onChange={onVary}
      />
    </div>
  );
}

export default Input;
