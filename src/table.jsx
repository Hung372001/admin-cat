import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import * as React from 'react';

const columns = [
  {
    field: 'index',
    headerName: 'STT', // Tiêu đề cột
    width: 90,
  },
  { field: 'id', headerName: 'User Name', width: 130 },
  { field: 'income', headerName: 'Income', width: 130 },
  { field: 'outcome', headerName: 'Out Come', width: 130 },
  { field: 'lv', headerName: 'Level', type: 'number'},
];

const originalRows = [
  {index:1, id:'UQC_kUnEKu41XvSPiMFEPfwg40SoEE4243s9ljDPN0ZLOJHg',  income: '3213', outcome: '3123213', lv: 1 },
  {index:2, id:'EQAcXJ-gthuIXSsfA1Z7GXVkEepZai_vBM1P0Vo9IIvGtImy',  income: '3232113', outcome: '3123213', lv: 2 },
  {index:3, id:'EQDFxaqJFfknF5uQaqkUOr0T2-ffopRlt7JX_MLhQL-rFLBX',  income: '3213', outcome: '3123213', lv: 4 },
  {index:4, id:'EQDPfYj9aZhuYYrR4-evDkXpyfAjRKUscVprqy6cfYOWmHjC',  income: '3213', outcome: '3123213', lv: 3 },
  {index:5, id:'EQBgrv2t47rqASkict2No-gGix_jg1dX5TKvfpA-F6xAgss2blb',  income: '3213', outcome: '3123213', lv: 5 },
  {index:6, id:'EQDAa15CDGKqWuluyVHXTXMLcJMAZJPdJuXLgoUAl304kH0u',  income: '32133', outcome: '3123213', lv: 5 },


];

const darkTheme = createTheme({
  palette: {
    mode: 'dark', 
  },
});

export default function MyDataGrid() {
  const [level, setLevel] = React.useState(0);
  const [rows, setRows] = React.useState(originalRows)

   React.useEffect(() => {
    setRows(originalRows); // Khởi tạo rows với dữ liệu gốc
  }, [originalRows]);

  const handleFilterChange = (event) => {
    const filteredRows = originalRows.filter(
      (el) => el.lv == event.target.value
    );
    setRows(filteredRows); 
    if(event.target.value === 0){
      setRows(originalRows); 
    }
    setLevel(event.target.value)
  };

  const handleSearchChange =(event)=>{
    const filteredRows = originalRows.filter(
      (el) => el.id.includes(event.target.value)
    )
    setRows(filteredRows); 

    if(event.target.value === ''){
      setRows(originalRows); 
    }
  }

  
  return (
    <ThemeProvider theme={darkTheme} >
      <TextField id="standard-basic" sx={{marginTop:10,marginBottom:4}} label="Usename" variant="standard" onChange={handleSearchChange}  />

       <FormControl  sx={{ m: 1, minWidth: 120, marginLeft:10,marginTop:10,marginBottom:4 }} size="small">
       <InputLabel id="demo-select-small-label">Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={level}
        label="Age"
        onChange={handleFilterChange}
      >
        <MenuItem value={0}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
    <DataGrid
      rows={rows}
      columns={columns}
      style={{ height: 420 }}
    />

    </ThemeProvider>
  );
}
