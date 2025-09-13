import Button from "../../UI/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../UI/Modal";
import CabinTable from "./CabinTable";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        {/* we can implement multiple windows to open in single modal and if we do that and want to open one window at a time then we need to specify which window is oepn by giving props name opens and name. 
      we can also give that props if want to open all windows. its just good practice to gives props that decribe relationships */}
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((prev) => !prev)}>
//         Add new cabin
//       </Button>

//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
