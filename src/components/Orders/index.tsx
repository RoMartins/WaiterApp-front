import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import {Content} from './styles';

const orders:Order[] = [

  {
    '_id': '638571a9529176a9b8c9db2b',
    'table': '123',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Coca coca',
          'imagePath': '1669688201177-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '638571a9529176a9b8c9db2c'
      },
    ],
  }
]
;

export function Orders() {
  return (
    <Content>
      <OrdersBoard
        icon ="🕑"
        title ="Fila de espera!"
        orders={orders}
      />

      <OrdersBoard
        icon ="👩‍🍳"
        title ="Em produção!"
        orders={[]}/>

      <OrdersBoard
        icon ="✅"
        title ="Pronto!"
        orders={[]}
      />
    </Content>
  );
}




