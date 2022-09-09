import { Box } from "@mui/system";
import Table from "./components/table";
export const headers = [
  {
    id: 1,
    sorting: false,
    value: '',
    key: ''
  },
  {
    id: 2,
    sorting: true,
    value: '#',
    key: 'id'
  },
  {
    id: 3,
    sorting: true,
    value: 'Name',
    key: 'Name'
  },
  {
    id: 4,
    sorting: true,
    value: 'Price',
    key: 'Price'
  },
  {
    id: 5,
    sorting: true,
    value: '1h %',
    key: 'Percentage1H'
  },
  {
    id: 6,
    sorting: true,
    value: '24h %',
    key: 'Percentage24H'
  },
  {
    id: 7,
    sorting: true,
    value: '7d %',
    key: 'Percentage7D'
  },
  {
    id: 8,
    sorting: true,
    value: 'Market Cap',
    key: 'MarketCap',
    info: true,
    infoText: 
    <Box sx={{p: 1, background: 'white'}}>
      <p>
        The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.
      </p>
      <p>
        Market Cap = Current Price x Circulating Supply.
      </p>
      <Box sx={{color: '#9374a4', py: 1, fontWeight: 'bold'}}>Read more</Box>
    </Box>
  },
  {
    id: 9,
    sorting: true,
    value: 'Volume(24h)',
    key: 'Volume24H',
    info: true,
    infoText: 
    <Box sx={{p: 1, background: 'white'}}>
      A measure of how much of a cryptocurrency was traded in the last 24 hours.
      <p>
        Market Cap = Current Price x Circulating Supply.
      </p>
      <Box sx={{color: '#9374a4', py: 1, fontWeight: 'bold'}}>Read more</Box>
    </Box>
  },
  {
    id: 10,
    sorting: true,
    value: 'Circulating Supply',
    key: 'CirculatingSupply',
    info: true,
    infoText: 
    <Box sx={{p: 1, background: 'white'}}>
      The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.
      <Box sx={{color: '#9374a4', py: 1, fontWeight: 'bold'}}>Read more</Box>
    </Box>
  },
  {
    id: 11,
    sorting: false,
    value: 'Last 7 Days',
  },
  {
    id: 12,
    sorting: true,
    value: '',
  },
];

export const rows = [
  {
    "id": 1,
    "Coin": "BTC",
    "Name": "Bitcoin",
    "Price": 64139.83,
    "Percentage1H": "1.47",
    "Percentage24H": "0.47",
    "Percentage7D": "5.43",
    "MarketCap": 1210461656117,
    "Volume24H": 29894898633,
    "CirculatingSupply": 18872231,
    "MaxSupply": 21000000,
    "Last7Days": "[64125.80, 64398.60, 64134.50, 64806.70, 64932.60, 66904.40, 67527.90]"
  },
  {
    "id": 2,
    "Coin": "ETH",
    "Name": "Ethereum",
    "Price": 4646.35,
    "Percentage1H": "-1.47",
    "Percentage24H": "-0.21",
    "Percentage7D": "4.46",
    "MarketCap": 549793627996,
    "Volume24H": 14523394832,
    "CirculatingSupply": 118328047,
    "MaxSupply": false,
    "Last7Days": "[4685.56, 4625.59, 4644.61, 4667.31, 4720.87, 4634.03, 4731.83]"
  },
  {
    "id": 3,
    "Coin": "BNB",
    "Name": "Binance Coin",
    "Price": 647.73,
    "Percentage1H": "-1.97",
    "Percentage24H": "4.09",
    "Percentage7D": "-4.55",
    "MarketCap": 108041796220,
    "Volume24H": 2077207621,
    "CirculatingSupply": 166801148,
    "MaxSupply": false,
    "Last7Days": "[650.92,650.10,626.64,629.89,615.28,635.19]"
  },
  {
    "id": 4,
    "Coin": "USDT",
    "Name": "Tether",
    "Price": 0.9999,
    "Percentage1H": "3.47",
    "Percentage24H": "-0.02",
    "Percentage7D": "-0.11",
    "MarketCap": 73855848803,
    "Volume24H": 65597573314,
    "CirculatingSupply": 73859886039,
    "MaxSupply": false,
    "Last7Days": "[0.9981,0.998,0.9981,0.998,0.998,1.00]"
  },
  {
    "id": 5,
    "Coin": "SOL",
    "Name": "Solana",
    "Price": 236.09,
    "Percentage1H": "1.47",
    "Percentage24H": "3.03",
    "Percentage7D": "-6.29",
    "MarketCap": 71556795233,
    "Volume24H": 2184694308,
    "CirculatingSupply": 303085983,
    "MaxSupply": false,
    "Last7Days": "[230.69,225.08,221.25,229.75,218.39,237.90]"
  },
  {
    "id": 6,
    "Coin": "ADA",
    "Name": "Cardano",
    "Price": 2.05,
    "Percentage1H": "-1.47",
    "Percentage24H": "-0.42",
    "Percentage7D": "3.90",
    "MarketCap": 68225986232,
    "Volume24H": 2077146657,
    "CirculatingSupply": 33298801078,
    "MaxSupply": 45000000000,
    "Last7Days": "[2.01,2.02,1.99,2.06,1.94,2.11]"
  },
  {
    "id": 7,
    "Coin": "XRP",
    "Name": "XRP",
    "Price": 1.19,
    "Percentage1H": "1.47",
    "Percentage24H": "-0.37",
    "Percentage7D": "4.75",
    "MarketCap": 56059002495,
    "Volume24H": 2890762268,
    "CirculatingSupply": 47158974920,
    "MaxSupply": 100000000000,
    "Last7Days": "[1.19  ,1.19   ,1.19   ,1.22   ,1.19   ,1.26   ,1.28]"
  },
  {
    "id": 8,
    "Coin": "DOT",
    "Name": "Polkadot",
    "Price": 46.89,
    "Percentage1H": "-31.47",
    "Percentage24H": "-2.41",
    "Percentage7D": "-7.37",
    "MarketCap": 46309745265,
    "Volume24H": 1273301680,
    "CirculatingSupply": 987579315,
    "Last7Days": "[46.40,47.13,45.88,47.65,46.87,50.78]"
  },
  {
    "id": 9,
    "Coin": "USDC",
    "Name": "USD Coin",
    "Price": 0.9989,
    "Percentage1H": "11.47",
    "Percentage24H": "0.16",
    "Percentage7D": "-0.12",
    "MarketCap": 34386866605,
    "Volume24H": 2847499611,
    "CirculatingSupply": 34424351584,
    "MaxSupply": false,
    "Last7Days": "[0.9996,1.00,0.9993,0.9999,0.9995,1.00]"
  },
  {
    "id": 10,
    "Coin": "DOGE",
    "Name": "Dogecoin",
    "Price": 0.2594,
    "Percentage1H": "-1.47",
    "Percentage24H": "1.31",
    "Percentage7D": "-0.54",
    "MarketCap": 34263451676,
    "Volume24H": 944681126,
    "CirculatingSupply": 132099945393,
    "MaxSupply": false,
    "Last7Days": "[0.2629,0.2617,0.2594,0.2612,0.2557,0.2735]"
  }
];

function App() {
  const tableProps = {
    headers: headers,
    rows: rows,
    showFirstButton: true,
    showLastButton: true,
    pagination: true,
    collapsible: true,
    selecting: true,
    actions: true,
    sorting: true,
  }
  return (
    <div className="App">
      <Table {...tableProps} />
    </div>
  );
}

export default App;
