import React from "react";

const Flex = ({ children, direction ='row', gap, justify, align,className }) => {
  const styles = {
    display: "flex",
    flexDirection: direction,
  };
  if(gap!==undefined){
    styles.gap = `${gap}px`
  }
  if(justify!==undefined){
    styles.justifyContent = justify
  }
  if(align!==undefined){
    styles.alignItems = align
  }
  return <div style={styles} className={className}>{children}</div>;
};

export default Flex;
