import classNames from "classnames";
const Box = ({
  children,
  className,
  width,
  position,
  top,
  left,
  right,
  bottom,
  radius,
  background,
  px,
  py,
  padding,
  border
}) => {
  let styles = {};
  if (position !== undefined) {
    styles.position = position;
    if (top !== undefined) {
      styles.top = `${top}px`;
    }
    if (left !== undefined) {
      styles.left = `${left}px`;
    }
    if (right !== undefined) {
      styles.right = `${right}px`;
    }
    if (bottom !== undefined) {
      styles.bottom = `${bottom}px`;
    }
  }
  if (radius) {
    styles.borderRadius = `${radius}px`;
  }
  if (px) {
    styles.paddingRight = `${px}px`;
    styles.paddingLeft = `${px}px`;
  }
  if (py) {
    styles.paddingTop = `${py}px`;
    styles.paddingBottom = `${py}px`;
  }
  if (background) {
    styles.background = background;
  }
  if(padding){
    styles.padding = `${padding}px`
  }
  if(border){
    styles.border = border;
  }
  if(width){
    styles.width = width;
  }
  const boxClasses = classNames(className, width);
  return (
    <div className={boxClasses} style={styles}>
      {children}
    </div>
  );
};

export default Box;
