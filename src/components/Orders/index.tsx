import {Content,Board, OrdersContainer} from './styles';


export function Orders() {
  return (
    <Content>
      <Board>
        <header>
          <span>🕑</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersContainer>
          <button type='button'>
            <strong>Mesa 02</strong>
            <span>3 itens</span>
          </button>

          <button type='button'>
            <span>Mesa 02</span>
            <span>3 itens</span>
          </button>
        </OrdersContainer>
      </Board>

      <Board>
        <header>
          <span>🕑</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersContainer>
          <button type='button'>
            <strong>Mesa 02</strong>
            <span>3 itens</span>
          </button>

          <button type='button'>
            <span>Mesa 02</span>
            <span>3 itens</span>
          </button>
        </OrdersContainer>
      </Board>

      <Board>
        <header>
          <span>🕑</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersContainer>
          <button type='button'>
            <strong>Mesa 02</strong>
            <span>3 itens</span>
          </button>

          <button type='button'>
            <span>Mesa 02</span>
            <span>3 itens</span>
          </button>
        </OrdersContainer>
      </Board>
    </Content>
  );
}




