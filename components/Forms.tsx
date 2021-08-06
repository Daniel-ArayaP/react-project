import {FormControl,FormLabel,FormErrorMessage,FormHelperText, RadioGroup,Radio
  } from "@chakra-ui/core";
  import React, { InputHTMLAttributes } from "react";

  type InputFormProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    textarea?: boolean;
  };
  
  export const Forms: React.FC<InputFormProps> = ({
    label,
    textarea,
    size: _,
    ...props
  }) => {return (
  <FormControl as="fieldset">
  <FormLabel as="legend">Genero</FormLabel>
  <RadioGroup defaultValue="Masculino">
    <Radio value="Female">Femenino</Radio>
    <Radio value="Male">Masculino</Radio>
    
  </RadioGroup>
  <FormHelperText id="email-helper-text">
    Select only if you're a person.
  </FormHelperText>
</FormControl>
);
};