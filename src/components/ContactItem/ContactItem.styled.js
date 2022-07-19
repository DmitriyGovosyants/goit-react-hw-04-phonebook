import styled from "@emotion/styled";

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  color: ${p => p.theme.colors.textColorSecond};

  background-color: ${p => p.theme.colors.secondBgc};
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`

export const Info = styled.p`
  padding: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.fontSizes.medium};
`

export const DeleteBtn = styled.button`
  margin-left: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.textColorMain};
  background-color: ${p => p.theme.colors.btnBgc};
  border-radius: 10px;
  border: none;
  outline: none;

  :hover {
    background-color: ${p => p.theme.colors.btnBgcAccent};
  }
  :focus {
    box-shadow: ${p => p.theme.shadow.formFocusShadow};
  }
`