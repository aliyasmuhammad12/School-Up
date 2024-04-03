import './Table.css'

export function Table({ children, id }) {
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
  let statusClass = "";

  // Determine the status class based on the status value
  if (status === "active") {
    statusClass = "active";
  } else if (status === "expired") {
    statusClass = "expired";
  } else if (status === "paid") {
    statusClass = "paid";
  } else if (status === "unpaid") {
    statusClass = "unpaid";
  }

  return (
    <span
      className={`table-text ${type === "simple" ? "table-simple-text" : "table-link-text"} ${statusClass}`}
    >
      {children}
    </span>
  );
}
