import React from "react";

const PrioritySection = ({
  priorityItems,
  handleItemClick,
  className,
  buttonText,
}) => {
  return (
    <div className={className}>
      <button className="sticky-top">{buttonText}</button>
      <ul className="priortySection" onClick={handleItemClick}>
        {[...priorityItems].map((record, index) => (
          <li data-section-order={index} key={index}>
            {record?.section_id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrioritySection;
