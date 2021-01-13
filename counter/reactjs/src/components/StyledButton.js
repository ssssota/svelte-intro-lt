import classes from './StyledButton.module.css';

const StyledButton = ({ children, onClick }) => (
  <button className={classes.button} onClick={onClick}>
    { children }
  </button>
);

export default StyledButton;
