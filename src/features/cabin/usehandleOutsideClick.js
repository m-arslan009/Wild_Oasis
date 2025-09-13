import { useEffect, useRef } from "react";

// listenCapturing is basically determins whether the event listener should be added in the capturing phase or bubbling phase
// capturing phase means the event is first captured by the outermost element and propagated to the inner elements
// bubbling phase means the event is first captured by the innermost element and propagated to the outer elements
// here we are using capturing phase because we want to close the modal when we click outside the modal
// if we use bubbling phase then the click event will be captured by the modal first and then propagated to the document and the modal will not close and if the modal is already close then it will not open again because the click event is already captured by the modal
//
export function useHandleOutsideClick(close, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", handleClickOutside, listenCapturing);
      return () =>
        document.removeEventListener(
          "click",
          handleClickOutside,
          listenCapturing
        );
    },
    [close, listenCapturing]
  );

  return ref;
}
