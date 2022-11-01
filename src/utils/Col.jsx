function Col({ className, auto, children }) {
  return (
    <div className={`${className ? className : ""}${auto ? " flex-grow" : ""}`}>
      {children}
    </div>
  );
}
export default Col;
