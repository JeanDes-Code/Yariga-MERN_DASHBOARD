import { Button } from '@pankod/refine-mui';

import { CustomButtonProps } from 'interfaces/common';

const CustomButton = ({
  type,
  title,
  handleClick,
  icon,
  backgroundColor,
  color,
  fullWidth,
}: CustomButtonProps) => {
  return (
    <Button
      onClick={handleClick}
      sx={{
        flex: fullWidth ? 1 : 'unset',
        padding: '10px 15px',
        width: fullWidth ? '100%' : 'unset',
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: '10px',
        textTransform: 'capitalize',
        '&:hover': {
          opacity: 0.9,
          backgroundColor,
        },
      }}
    >
      {icon}
      {title}
    </Button>
  );
};

export default CustomButton;
