function Container({ children, className }) {
  return (
    <section className={`container mx-auto ${className ? className : ""}`}>
      {children}
    </section>
  );
}
export default Container;
