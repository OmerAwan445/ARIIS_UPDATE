import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaArrowCircleDown } from "react-icons/fa";
import PrioritySection from "./PrioritySections";
import PriorityWrapper from "./PriorityWrapper";

const PrioritySectionSidebarCanvas = ({
  highpriorityItems,
  handleItemClick,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOffcanvasShow = () => {
    setShow(true);
  };

  return (
    <>
      <button
        className="toggle-button d-lg-none align-self-center"
        type="button"
        onClick={handleOffcanvasShow}
      >
        <FaArrowCircleDown className="navbar-toggler-icon" />
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdropClassName="false"
        style={{
          background: "#111826",
          fontFamily: "Nunito, sans-serif",
          fontWeight: "500",
          padding: "0",
          //   marginTop: 'calc(60px)'
        }}
        className=""
      >
        <Offcanvas.Header className="p-0 mt-2">
          <p
            onClick={handleClose}
            className="col-12 d-flex justify-content-end"
          >
            <span className="close" style={{ color: "white" }}>
              X
            </span>
          </p>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="content-wrapper " style={{ background: "#111826" }}>
            <div className="row">
              <div className="p-0">
                <PriorityWrapper>
                  <PrioritySection
                    priorityItems={highpriorityItems}
                    handleItemClick={handleItemClick}
                    className={"filterone h-100 w-100 overflow-y-scroll"}
                    buttonText={"High priority sections"}
                  />
                  <PrioritySection
                    priorityItems={highpriorityItems}
                    handleItemClick={handleItemClick}
                    className={"filtertwo h-100 w-100 overflow-y-scroll"}
                    buttonText={"Mid priority sections"}
                  />
                  <PrioritySection
                    priorityItems={highpriorityItems}
                    handleItemClick={handleItemClick}
                    className={"filterthree h-100 w-100 overflow-y-scroll"}
                    buttonText={"Green sections"}
                  />
                </PriorityWrapper>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PrioritySectionSidebarCanvas;
