import { Order } from '../../types/Order';
import {Overlay,ModalBody,OrderDetails} from './styles';
import closeIcon from '../../assets/images/close-icon.svg';

interface orderModalProps {
  visible : boolean
  order: Order | null
}

export function OrderModal({visible} : orderModalProps) {
  if(!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type="button">
            <img src={closeIcon}/>
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>🕑</span>
            <strong>Fila de espera</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
