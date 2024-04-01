import classNames from "classnames";
const Heading = ({ children, color = "#000", className, font,family, weight,align="left" }) => {
  const headClasses = classNames(font, weight, className);
  return (
    <h2 className={headClasses} style={{ color,textAlign:align,fontFamily: family }}>
      {children}
    </h2>
  );
};

export default Heading;
