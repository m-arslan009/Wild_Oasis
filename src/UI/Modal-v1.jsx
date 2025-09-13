import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  &:hover {
    background-color: var(--color-gray-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* fill: var(--color-gray-500);
    stroke: var(--color-gray-500); */
    color: var(--color-gray-500);
  }
`;

// react portal make the component i.e modal in that case is to be rendered outside the root div which is #root in index.html
// it works by lifting the modal in that case to the outside of the dom and we can specify where to render it even it is a child component of another component
// the structure is return createPortal(jsx, position) where jsx is what you want to render and position is where you want to render it. position is basically a dom node/component/tag just like body, h1, main
// // so on we can also create our own component using react.createElement method but here we use already available component which is body in that case i default component i.e. body tag
// NOTE: but in component tree it located on same position where it is called but in dom tree it is lifted to the position we specified in createPortal method
export default function Modal({ children, onClose }) {
  //   return (
  //     <Overlay>
  //       <StyledModal>
  //         <Button onClick={onClose}>
  //           <HiXMark />
  //         </Button>
  //         <div>{children}</div>
  //       </StyledModal>
  //     </Overlay>
  //   );

  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}
