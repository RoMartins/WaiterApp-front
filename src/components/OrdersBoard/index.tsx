import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import {Board, OrdersContainer} from './styles';


interface OrderBoardsProps {
  icon: string;
  title: string;
  orders: Order[];
}
export function OrdersBoard({icon, title, orders}:OrderBoardsProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orderSelected, setOrderSelected] = useState<null | Order>(null);

  function handleOpenOrderModal(order : Order) {
    setOrderSelected(order);
    console.log(order);
    setIsModalVisible(true);
  }

  return (
    <Board>

      <OrderModal visible={isModalVisible} order={orderSelected}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {
            orders.map((order) => (
              <button key={order._id} type='button' onClick={() => handleOpenOrderModal(order)}>
                <strong>{order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            ) )
          }
        </OrdersContainer>

      ) }
    </Board>

  );
}
