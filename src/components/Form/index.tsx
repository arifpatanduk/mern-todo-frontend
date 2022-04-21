import React from "react";
import CloseIcon from "../../assets/svg/close";
import { Transition } from "react-transition-group";

type Inputs = {
  title: string;
  status: "completed" | "uncompleted";
};

type Props = {
  inProp: boolean;
  onClose: () => void;
};

const DURATION = 240;

const formDefaultStyle = {
  transition: `bottom ${DURATION}ms ease-in-out, opacity ${
    DURATION * 2
  }ms ease-in-out`,
  opacity: 0,
  bottom: "-180px",
};

const overlayDefaultStyle = {
  transition: `bottom ${DURATION}ms ease-in-out, opacity ${
    DURATION * 2
  }ms ease-in-out`,
  opacity: 0,
  display: "none",
};

const formTransitionStyles = {
  unmounted: { bottom: "-180px", opacity: 0 },
  entering: { bottom: 0, opacity: 1 },
  entered: { bottom: 0, opacity: 1 },
  exiting: { bottom: "-180px", opacity: 0 },
  exited: { bottom: "-180px", opacity: 0 },
};

const overlayTransitionStyles = {
  unmounted: { bottom: "-180px", opacity: 0 },
  entering: { display: "block", opacity: 0.85 },
  entered: { display: "block", opacity: 0.85 },
  exiting: { bottom: "-180px", opacity: 0 },
  exited: { bottom: "-180px", opacity: 0 },
};

const Form: React.FC<Props> = ({ inProp, onClose }) => {
  // const handleOnClose = () => {
  //   reset()
  //   onClose()
  // }
  return (
    <Transition in={inProp} timeout={DURATION}>
      {(state) => (
        <>
          <div
            onClick={onClose}
            style={{
              ...overlayDefaultStyle,
              ...overlayTransitionStyles[state],
            }}
            className="fixed left-0 top-0 bottom-0 right-0 bg-black"
          />
          <div
            style={{
              ...formDefaultStyle,
              ...formTransitionStyles[state],
            }}
            className="fixed flex flex-col z-10 inset-x-0 rounded-t-lg p-4 h-32 bg-white"
          >
            <form className="flex justify-center items-center bg-gray-200 px-4 py-2 rounded-lg box-border">
              <input
                name="title"
                placeholder="Write new task"
                className="text-darkPurple flex-1 bg-transparent outline-none"
              />
              <input
                className="hidden"
                name="status"
                defaultValue="uncompleted"
              />
              <input
                type="submit"
                value="add"
                className="bg-transparent text-md font-bold text-darkPurple outline-none ml-1"
              />
            </form>
            <span
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                bottom: "10px",
                left: "50%",
              }}
            >
              <CloseIcon />
            </span>
          </div>
        </>
      )}
    </Transition>
  );
};

export default Form;
