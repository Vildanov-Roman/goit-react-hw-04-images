import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ children, onClick }) => {
  const BtnClickHandler = () => {
    onClick();
  };
  return (
    <StyledButton type="button" onClick={BtnClickHandler}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};
