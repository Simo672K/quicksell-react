function Flex({ children, className }) {
  return <div className={`flex ${className ? className : ""}`}>{children}</div>;
}
export default Flex;
