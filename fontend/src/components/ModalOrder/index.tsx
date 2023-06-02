import Modal from "react-modal";
import style from "./style..module.scss";
import { FiX } from "react-icons/fi";
import { OrderItemProps } from "../../pages/dashboard";

interface ModalOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
}

export function ModalOrder({ isOpen, onRequestClose, order, handleFinishOrder }: ModalOrderProps) {
  const customStyles = {
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "30px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1d1d2e",
    },
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          style={{ background: " transparent", border: 0 }}
        >
          <FiX size={45} color="#f34748" />
        </button>
        <div className={style.container}>
            <h2>
                Detalhes do pedido
            </h2>
            <span className={style.table}>
            Mesa: <strong>{order[0].order.table}</strong>   
             </span>
             {order.map( item=>(
                <section key={item.id} className={style.containerItem}>
                    <span>{item.amount} - <strong>{item.product.name}</strong></span>
                    <span className={style.description}>{item.product.description}</span>
                </section>
             ))}
             <button className={style.buttonOrder} onClick={ () => handleFinishOrder(order[0].order_id)}>
                Concluir pedido
             </button>
        </div>
      </Modal>
    </div>
  );
}
