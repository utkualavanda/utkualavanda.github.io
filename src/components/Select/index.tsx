import {
  Select as MuiSelect,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ISelectProps } from './type';

export const Select = (props: ISelectProps) => {
  const {
    id = uuidv4(),
    name,
    label,
    options,
    helperText,
    disabled,
    onChange,
    emptyValue,
    ...rest
  } = props;
  const { data, displayValue, displayField } = options;

  const renderMenuItems = () => {
    if (data?.length) {
      return data.map((e: any, i: number) => (
        <MenuItem
          key={i}
          value={e[displayValue]}
          onClick={(a) => {
            onChange && onChange(e[displayValue]);
          }}
        >
          {e[displayField]}
        </MenuItem>
      ));
    }
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <MuiSelect
        id={id}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
        }}
        disabled={disabled}
        {...rest}
      >
        {renderMenuItems()}
      </MuiSelect>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
