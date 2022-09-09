import React from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/system";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MyChart from "./chart";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  marginTop: 5,
  cursor: "pointer",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#9374a4",
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    maxWidth: 300,
    minWidth: 300,
    color: "#000",
    fontSize: "14px",
    borderRadius: "8px",
    padding: "12px",
    border: "1px solid rgba(0, 0, 0, 0.09)",
    boxShadow:
      "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)",
  },
}));

export function Row(props) {
  const { item, actions, index } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checked, setChecked] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (event) => {
    setChecked(!checked);
  };
  return (
    <TableRow>
      <TableCell scope="row">
        {checked ? (
          <StarIcon
            sx={{
              cursor: "pointer",
              color: "#faa41a",
            }}
            size="small"
            onClick={handleSelect}
          />
        ) : (
          <StarBorderIcon
            sx={{
              cursor: "pointer",
              color: "#a6b1c2",
              "&:hover": { color: "#faa41a" },
            }}
              size="small"
              onClick={handleSelect}
          />
        )}
      </TableCell>
      <TableCell scope="row">{item.id}</TableCell>
      <TableCell scope="row">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              height: "24px",
              width: "24px",
              borderRadius: "12px",
              mx: 1,
            }}
          >
            <img
              src={require(`../icons/${item.Coin.toLowerCase()}.png`)}
              alt={item.Coin}
              height="100%"
            />
          </Box>
          <Box sx={{ fontWeight: 700, mr: 1 }}>{item.Name}</Box>
          {item.Coin}
        </Box>
      </TableCell>
      <TableCell scope="row" sx={{ fontWeight: 600, textAlign: "right" }}>
        ${numberWithCommas(item.Price.toString().split(".")[0])}.
        {item.Price.toString().split(".")[1]}
      </TableCell>
      <TableCell
        scope="row"
        sx={{
          color:
            Math.ceil(+item.Percentage1H) > 0
              ? "#008800"
              : "#9e3958",
              fontWeight: 600,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {Math.ceil(+item.Percentage1H) > 0 ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
          {item.Percentage1H}%
        </Box>
      </TableCell>
      <TableCell
        scope="row"
        sx={{
          color:
            Math.ceil(+item.Percentage24H) > 0
              ? "#008800"
              : "#9e3958",
              fontWeight: 600,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {Math.ceil(+item.Percentage24H) > 0 ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
          {item.Percentage24H}%
        </Box>
      </TableCell>
      <TableCell
        scope="row"
        sx={{
          color:
            Math.ceil(+item.Percentage7D) > 0
              ? "#008800"
              : "#9e3958",
              fontWeight: 600,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {Math.ceil(+item.Percentage7D) > 0 ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
          {item.Percentage7D}%
        </Box>
      </TableCell>
      <TableCell scope="row" sx={{ fontWeight: 600, textAlign: "right" }}>
        ${numberWithCommas(item.MarketCap)}
      </TableCell>
      <TableCell scope="row" sx={{ fontWeight: 600, textAlign: "right" }}>
        ${numberWithCommas(item.Volume24H)}
      </TableCell>
      <TableCell scope="row" sx={{ fontWeight: 600, textAlign: "right" }}>
        <Box>
          {numberWithCommas(item.CirculatingSupply)}&nbsp;{item.Coin}
          {item.MaxSupply && (
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Percentage</div>
                      <div>
                        {(
                          (item.CirculatingSupply / item.MaxSupply) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                    </Box>
                    <BorderLinearProgress
                      variant="determinate"
                      value={
                        +(
                          (item.CirculatingSupply / item.MaxSupply) *
                          100
                        ).toFixed()
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        my: 1,
                      }}
                    >
                      <div>Circulating Supply</div>
                      <div>
                        {item.CirculatingSupply}&nbsp;{item.Coin}
                      </div>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Max Supply</div>
                      <div>
                        {item.MaxSupply}&nbsp;{item.Coin}
                      </div>
                    </Box>
                  </Box>
                </React.Fragment>
              }
            >
              <BorderLinearProgress
                variant="determinate"
                value={
                  +((item.CirculatingSupply / item.MaxSupply) * 100).toFixed()
                }
              />
            </HtmlTooltip>
          )}
        </Box>
      </TableCell>
      {/* <TableCell scope="row">{item.Last7Days}</TableCell> */}
      <TableCell scope="row">
        <MyChart index={index} chartData={item.Last7Days } />
      </TableCell>
      {actions && (
        <TableCell scope="row">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>View Charts</MenuItem>
            <MenuItem onClick={handleClose}>View Markets</MenuItem>
            <MenuItem onClick={handleClose}>View Historical Data</MenuItem>
          </Menu>
        </TableCell>
      )}
    </TableRow>
  );
}
