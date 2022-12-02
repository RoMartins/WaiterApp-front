import { OrdersBoard } from '../OrdersBoard';
import {Content} from './styles';


export function Orders() {
  return (
    <Content>
      <OrdersBoard
        icon ="🕑"
        title ="Fila de espera!"
      />

      <OrdersBoard
        icon ="👩‍🍳"
        title ="Em produção!"/>

      <OrdersBoard
        icon ="✅"
        title ="Pronto!"
      />
    </Content>
  );
}




