import './Table.css'

export function Table({ children,id }) {
  return <table className="global-table" id={id}>{children}</table>;
}

export function TableHead({ children }) {
  return <thead className="global-table-head">{children}</thead>;
}
export function TableHeadData({ children }) {
  return <th className="global-table-head-data">{children}</th>;
}
export function TableRow({ children }) {
  return <tr className="global-table-row">{children}</tr>;
}
export function TableBody({ children }) {
  return <tbody className="global-table-body">{children}</tbody>;
}
export function TableBodyData({ children }) {
  return <td className="global-table-body-data">{children}</td>;
}

export function TableText({ children, variant = { type: "simple", status: "" } }) {
  const { type, status } = variant;
  return (
    <span
      className={`table-text ${type === "simple" ? "table-simple-text" : "table-link-text"} ${status === "paid" ? "paid" : status === "unpaid" ? "unpaid" : ""}`}
    >
      {children}
    </span>
  );
}


