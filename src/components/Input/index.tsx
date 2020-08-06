import React, { InputHTMLAttributes } from 'react';

import './styles.css';

// Quero que essa Input receba todos os atributos de um input do HTML padrão
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

// ...rest: Rest Operator (ES6) pega todas as propriedades restantes
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
  
}

export default Input;