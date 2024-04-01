// import type { ReactNode } from "react"
import classNames from "classnames"
// type ContainerProps= {
//     children:ReactNode;
//     height?:'vh-100';
//     className?:string
// }
const Container = ({children,height,className}) => {

  const classes = classNames('container',height,className)
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Container
