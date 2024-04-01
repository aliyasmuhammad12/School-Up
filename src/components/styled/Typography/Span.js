// import type { TextTypes } from "./Types";
import classNames from "classnames";
const Span = ({children,color='#000',className,font,weight}) => {
    const spanClasses = classNames(font,weight,className)
  return <span className={spanClasses} style={{color:color}}>{children}</span>;
};

export default Span;
