import styled from "@emotion/styled";
import { Field, Form } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(10)};
  padding: ${p => p.theme.spacing(2)};

  border-radius: 20px;
  border: 3px dashed green;
`

export const Label = styled.label`
  margin-bottom: ${p => p.theme.spacing(2)};

  font-weight: 800;
  color: ${p => p.theme.colors.textColorSecond};
`

export const Input = styled(Field)`
  min-width: 300px;
  margin-bottom: ${p => p.theme.spacing(5)};
  padding: ${p => p.theme.spacing(2)};

  text-align: center;

  border: none;
  outline: none;

  :focus {
    box-shadow: ${p => p.theme.shadow.formFocusShadow};
  }
`

export const SubmitBtn = styled.button`
  padding: ${p => p.theme.spacing(3)};

  font-weight: 700;
  color: ${p => p.theme.colors.textColorMain};

  background-color: ${p => p.theme.colors.btnBgc};
  border-radius: 10px;
  outline: none;
  
  :focus {
    box-shadow: ${p => p.theme.shadow.formFocusShadow};
  }
  :hover {
    background-color: ${p => p.theme.colors.btnBgcAccent};
  }
`