import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"


import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />


      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="45%">Desenvolvimento de Site</td>
              <td>
                <PriceHighLight variant="income">R$ 4.399,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>11/08/2023</td>
            </tr>


            <tr>
              <td width="45%">Hamburger</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 75,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>15/08/2023</td>
            </tr>

            <tr>
              <td width="45%">So mais um exemplo</td>
              <td>
                <PriceHighLight variant="income">R$ 2,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/08/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div >
  )
}