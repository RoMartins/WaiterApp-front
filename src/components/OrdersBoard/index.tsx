import {Board, OrdersContainer} from './styles';

interface OrderBoardsProps {
  icon: string,
  title: string
}
export function OrdersBoard({icon, title}:OrderBoardsProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type='button'>
          <strong>Mesa 02</strong>
          <span>3 itens</span>
        </button>

        <button type='button'>
          <strong>Mesa 02</strong>
          <span>3 itens</span>
        </button>
      </OrdersContainer>
    </Board>

  );
}
