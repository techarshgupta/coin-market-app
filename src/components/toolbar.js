import React from "react";
import { alpha, Chip, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";
import InsightsIcon from "@mui/icons-material/Insights";
import StarIcon from '@mui/icons-material/Star';
export function TableToolbar(props) {
  const { numSelected } = props;
  const [active, setActive] = React.useState("Cryptocurrencies");
  const chips = [
    "Cryptocurrencies",
    "Categories",
    "DeFi",
    "NFT",
    "Metaverse",
    "Polkadot",
    "BNB Chain",
    "Solana",
    "Avalanche",
  ];
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Today's Cryptocurrency Prices by Market Cap
          </Typography>
        )}
      </Toolbar>
      <Box sx={{ px: 2, pb: 1, display: "flex", alignItems: "center" }}>
        <Chip
          label="Watchlist"
          sx={{
            borderRadius: "8px",
            mr: 1,
            fontWeight: 600,
            background: "white",
            cursor: "pointer",
            border: "0.2px solid #a6b1c2",
            '&:hover': { 
              background: "rgba(147, 116, 164, 1)",
              color: 'white',
              '.MuiChip-icon': {
                color: "white"
              }
            }
          }}
          icon={<StarIcon />}
         />
        <Chip
          label="Portfolio"
          sx={{
            borderRadius: "8px",
            mr: 1,
            fontWeight: 600,
            background: "white",
            cursor: "pointer",
            border: "0.2px solid #a6b1c2",
            '&:hover': { 
              background: "rgba(147, 116, 164, 1)",
              color: 'white',
              '.MuiChip-icon': {
                color: "white"
              }
            }
          }}
          icon={<InsightsIcon />}
        />
        <Box sx={{ borderLeft: "1px solid #a6b1c2", height: "24px", mx: 2 }} />
        {chips.map((chip, idx) => (
          <Chip
            label={chip}
            key={idx}
            sx={{
              borderRadius: "8px",
              cursor: "pointer",
              mx: 1,
              background: active === chip ? "rgba(147, 116, 164, 1)" : "white",
              color: active === chip ? "white" : "",
              fontWeight: 600,
              border:
                active === chip
                  ? "1px solid rgba(147, 116, 164, 0.3)"
                  : ".2px solid #a6b1c2",
              "&:hover": {
                background: "rgba(147, 116, 164, 1)",
                color: "white",
              },
            }}
            onClick={(event) => {
              setActive(chip);
            }}
          />
        ))}
      </Box>
    </>
  );
}
