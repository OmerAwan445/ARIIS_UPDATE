const PriorityWrapper = ({ children }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="d-flex h-100 flex-column w-100">{children}</div>
    </div>
  );
};

export default PriorityWrapper;
