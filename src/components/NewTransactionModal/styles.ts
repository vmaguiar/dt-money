import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { styled } from "styled-components";

export const NewTransactionModalContainer = styled.div`
  border: 1px solid white;
`

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`


export const Content = styled(Dialog.Content)`
  min-width: 32rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${props => props.theme['gray-800']};

  border-radius: 6px;

  padding: 2.5rem 3rem;


  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;


    input {
      background: ${props => props.theme['gray-900']};

      color: ${props => props.theme['gray-300']};

      border-radius: 6px;
      border: 0;

      padding: 1rem;


      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }


    button[type="submit"] {
      background: ${props => props.theme['green-500']};

      color: ${props => props.theme.white};
      font-weight: bold;

      height: 58px;

      border: 0;
      border-radius: 6px;

      cursor: pointer;

      padding: 0 1.25rem;
      margin-top: 1.5rem;


      &:hover {
        background: ${props => props.theme['green-700']};
        transition: background-color 0.3s;
      }
    }
  }
`


export const CloseButton = styled(Dialog.Close)`
  position: absolute;

  background: transparent;

  color: ${props => props.theme['gray-500']};

  border: 0;

  top: 1.5rem;
  right: 1.5rem;

  line-height: 0;

  cursor: pointer;
`


export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}
export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  background: ${props => props.theme['gray-700']};

  color: ${props => props.theme['gray-300']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  border-radius: 6px;
  border: 0;

  padding: 1rem;


  svg {
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']}
  }


  &[data-state="checked"] {
    background: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};

    color: ${props => props.theme['white']};

    svg {
      color: ${props => props.theme['white']};
    }
  }


  &[data-state="unchecked"]:hover {
    background: ${props => props.theme['gray-600']};
    transition: background-color 0.3s;
  }
`