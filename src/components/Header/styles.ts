import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['gray-900']};

  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 0 1.5rem;
`


export const NewTransactionButton = styled.button`
  background: ${props => props.theme['green-500']};

  color: ${props => props.theme.white};
  font-weight: bold;

  height: 50px;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  padding: 0 1.25rem;


  &:hover {
    background: ${props => props.theme['green-700']};
    transition: background-color 0.3s;
  }
`