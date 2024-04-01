import classNames from "classnames";
const Text = ({
  children,
  color = "#000",
  className,
  font,
  weight,
  align = "center",
}) => {
  const textClasses = classNames(font, weight, className);
  return (
    <p className={textClasses} style={{ color: color, textAlign: align }}>
      {children}
    </p>  
  );
};

export default Text;
