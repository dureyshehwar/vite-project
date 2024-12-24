
type ButtonProps = {
  link: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
   
  );
};

export default Button;