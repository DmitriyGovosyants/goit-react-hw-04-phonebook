import styled from "@emotion/styled";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(5)};
`

export const Label = styled.label`
  margin-bottom: ${p => p.theme.spacing(2)};

  font-weight: 800;
  color: ${p => p.theme.colors.textColorSecond};
`

export const Input = styled.input`
  min-width: 300px;
  padding: ${p => p.theme.spacing(2)};

  text-align: center;

  border: none;
  outline: none;

  :focus {
    box-shadow: ${p => p.theme.shadow.formFocusShadow};
  }
`