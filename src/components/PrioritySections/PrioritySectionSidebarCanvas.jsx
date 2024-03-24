import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import PrioritySection from "./PrioritySections";
import PriorityWrapper from "./PriorityWrapper";
import ToggleButton from "@/utils/ToggleButton";

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
      <ToggleButton 
      handleClick={handleOffcanvasShow}/>

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
