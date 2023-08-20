import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    background: ${props => props.theme['gray-900']};

    color: ${props => props.theme['gray-300']};
    
    border-radius: 6px;
    border: 0;

    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme['gray-500']}
    }
  }


  button {
    background: transparent;

    color: ${props => props.theme['green-500']};
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    border-radius: 6px;
    border: 1px solid ${props => props.theme['green-300']};

    padding: 1rem;


    &:hover {
      background: ${props => props.theme['green-500']};

      color: ${props => props.theme['white']};

      border: 1px solid ${props => props.theme['green-500']};

      transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }
  }
`