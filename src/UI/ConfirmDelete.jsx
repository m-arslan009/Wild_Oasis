import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyleConfirmDelete = styled.div`
  max-width: 400px;

  & p {
    margin: 1rem 0 2rem;
    letter-spacing: 1px;
  }

  & div {
    text-align: right;
  }

  & button {
    margin: 0 0.5rem;
  }
`;

// onCloseModal is get from Modal component as we mutate the child just like cloneElement(child: {onCloseModal: })...
function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyleConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete cabin {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Yes, delete
        </Button>
      </div>
    </StyleConfirmDelete>
  );
}
export default ConfirmDelete;
