'use client';

const HeaderButton = ({
  buttonText,
  handleClick,
}: {
  buttonText: string;
  handleClick: () => void;
}) => {
  return <button onClick={handleClick}>{buttonText}</button>;
};

export default HeaderButton;
