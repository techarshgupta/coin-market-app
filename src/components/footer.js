import React from 'react';
import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';


export function Footer(props) {
  const { page, count, rowsPerPage, handleRowsClick, handlePageClick } = props;
  const from = (page);
  const to = (page * rowsPerPage + rowsPerPage) > count ? count : page * rowsPerPage + rowsPerPage;
    
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={3} sx={{ alignItems: "center" }}>
        <Grid item xs>
          {`Showing ${from}-${to} out of ${count} Items`}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pagination count={count < rowsPerPage ? 1 :count / rowsPerPage} shape="rounded" page={page}
            onChange={handlePageClick}
            sx={{
              '.Mui-selected': {
                color: 'white',
                backgroundColor: '#9374a4 !important'
            }}}
           />
        </Grid>
        <Grid item xs sx={{ textAlign: "end" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'end' }}>
            Show rows
            <FormControl sx={{ m: 1 }} size="small">
              <Select
                displayEmpty
                value={rowsPerPage}
                onChange={(e) => handleRowsClick(e.target.value)}
              >
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="50">50</MenuItem>
                <MenuItem value="100">100</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}