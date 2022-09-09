import React from "react";
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    maxWidth: 300,
    color: '#000',
    fontSize: '13px',
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.09)',
    boxShadow:
      '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)',
  },
}));

export function Headers(props) {
  const { headers, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead
      sx={{
        "& .MuiTableCell-stickyHeader": {
          // backgroundColor: "grey.300",
          borderTop: "1px solid rgba(224, 224, 224, 1)",
          padding: "8px",
          fontSize: "12px",
          fontWeight: "600",
          color: "#000",
          whiteSpace: "nowrap",
        },
      }}
    >
      <TableRow>
        {headers.map((item, idx) => (
          <TableCell
            scope="header"
            key={idx}
            sortDirection={orderBy === item.key ? order : false}
          >
            {item.sorting ? (
              <Box
                sx={{ cursor: "pointer", display: 'flex', alignItems: 'center', userSelect: 'none' }}
              >
                <span onClick={createSortHandler(item.key)}>
                <TableSortLabel
                  active={orderBy === item.key}
                    direction={orderBy === item.key ? order : "asc"}
                    IconComponent={ArrowDropDownIcon}
                 />
                  {item.value}
                  </span>
                {item.info && <HtmlTooltip
                  title={
                    <React.Fragment>
                      {item.infoText}
                    </React.Fragment>
                  }
                >
                  <InfoIcon size="small" sx={{ fontSize: '16px', color: 'rgb(166, 176, 195)', mx: 1}} />
                </HtmlTooltip>}
              </Box>
            ) : (
              item.value
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
