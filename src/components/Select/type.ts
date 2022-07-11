import { SelectProps } from '@mui/material';

interface ISelectOptios {
  data: any[];
  displayField: string;
  displayValue: any;
}

export interface ISelectProps extends Omit<SelectProps, 'onChange'> {
  options: ISelectOptios;
  helperText?: string;
  onChange?: (val: any) => void;
  emptyValue?: boolean;
}
