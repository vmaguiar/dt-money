import logoImg from '../../assets/logo.svg'

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";


export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}