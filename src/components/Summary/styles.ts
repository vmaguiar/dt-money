import { css, styled } from "styled-components";

export const SummaryContainer = styled.section`
  max-width: 1120px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.5rem;
`

interface SummaryCardProps {
  bgGreen?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme["gray-600"]};

  border-radius: 6px;

  padding: 2rem;

  header {
    color: ${props => props.theme["gray-300"]};

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    font-size: 2rem;

    display: block;

    margin-top: 1rem;
  }

  ${props => props.bgGreen === 'green' && css`background: ${props.theme['green-700']}`}
`