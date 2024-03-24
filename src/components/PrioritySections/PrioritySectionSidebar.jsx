import PrioritySection from "./PrioritySections";
import PriorityWrapper from "./PriorityWrapper";

const PrioritySectionSidebar = ({ highpriorityItems, handleItemClick }) => {
  return (
    <div className="d-none d-lg-block p-0" style={{ width: "240px" }}>
      <PriorityWrapper>
        {/* <div className="filterone h-100 w-100 overflow-y-scroll">
            <button className="sticky-top">High priority sections</button>
            <ul className="priortySection" onClick={handleItemClick}>
              {[...highpriorityItems].map((record, index) => (
                <li data-section-order={index} key={index}>
                  {record?.section_id}
                </li>
              ))}
            </ul>
          </div> */}

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

        {/* <div className="filtertwo h-100 w-100 overflow-y-scroll">
            <button className="sticky-top">Mid priority sections</button>
            <ul className="priortySection">
              {midpriority?.map((record) => (
                <li
                  onClick={() => setIsShowArisRunIdModal(true)}
                  key={record?.id}
                >
                  {record?.text}
                </li>
              ))}
            </ul>
              </div>*/}
        {/* <div className="filterthree h-100 w-100 overflow-y-scroll">
            <button className="sticky-top">Green sections</button>
            <ul className="priortySection">
              {greenpriority?.map((record) => (
                <li key={record?.id}>{record?.text}</li>
              ))}
            </ul>
          </div> */}
      </PriorityWrapper>
    </div>
  );
};

export default PrioritySectionSidebar;
