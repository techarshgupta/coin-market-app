import React from "react";
import { Table, TableBody, TableContainer } from "@mui/material";
import { Footer } from "./footer";
import { Headers } from "./headers";
import { TableToolbar } from "./toolbar";
import { Row } from "./row";

export default function TutorialTable(props) {
  const {
    headers,
    rows,
    pagination,
    sorting,
    actions,
  } = props;
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState('id');
  const handleRowsClick = (page) => {
    setPage(1);
    setRowsPerPage(page);
  };
  const handlePageClick = (_, value) => {
    setPage(value);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const paginationProps = {
    pagination,
    page,
    handleRowsClick,
    handlePageClick,
    rowsPerPage,
    count: rows.length,
  };
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  let rowsData = rows;
  let activePage = page -1;
  if (sorting && pagination) {
    rowsData = stableSort(rows, getComparator(order, orderBy)).slice(
      activePage * rowsPerPage,
      activePage * rowsPerPage + rowsPerPage
    );
  }
  return (
    <>
      <TableToolbar />
      <TableContainer>
        <Table stickyHeader={true}>
          <Headers
            headers={headers}
            sorting={sorting}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {rowsData.map((item, idx) => (
              <Row
                item={item}
                key={idx}
                index={idx}
                actions={actions}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer {...paginationProps} />
    </>
  );
}
