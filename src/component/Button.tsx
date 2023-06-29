import React from "react";
import { useCounter } from "../provider/Counter";

// interface ButtonProps {
//   text: string;
//   onClick?: () => void; //onClick is Optional
// }

const Button: React.FC<any> = (props) => {
  // const [value, setValue] = useState<string | undefined>();
  // const { text, onClick = () => setValue("Jit Bherwani") } = props;
  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(e);
  // };
  const context = useCounter();
  return (
    <div>
      <h1 onClick={(e) => context?.setCount(context.value + 1)}>
        {context?.value}
      </h1>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleNameChange} />
        <h1>{value}</h1>
        <button onClick={onClick}>{text}</button>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default Button;
