import { useEffect } from 'react';
import './Button.scss';

type IButtonType = 'button' | 'submit' | 'reset' | undefined;

interface IButtonProps {
  text: string;
  type: IButtonType;
  onPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ text, type, onPress }: IButtonProps) {
  // TODO: удалить после тестирования
  useEffect(() => {
    console.log('Button mounted');
    return () => {
      console.log('Button unmounted');
    };
  }, []);

  return (
    <button className="app_button" type={type} onClick={onPress}>
      {text}
    </button>
  );
}

export default Button;
