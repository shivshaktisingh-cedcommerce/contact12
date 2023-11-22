'use client';





import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function MyComponent() {
  return (<div style={{width:'60%'}}>
  
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          Pieces
        </Grid>
        <Grid item xs={3}>
        <Grid container spacing={0}>
        <Grid item xs={6}>
          Weight
        </Grid>
        <Grid item xs={6}>
        </Grid>
    
        </Grid>
        </Grid>
        <Grid item xs={5}>
        <Grid container spacing={0}>
        <Grid item xs={3}>
          Length
        </Grid>
        <Grid item xs={3}>
          Width
        </Grid>
        <Grid item xs={3}>
          Height
        </Grid><Grid item xs={3}>
         
        </Grid>
        </Grid>          
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
        <Grid container spacing={0}>
        <Grid item xs={7}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
</Grid>
<Grid item xs={5}>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Grid>

        </Grid>
                </Grid>
        <Grid item xs={5}>
      
        <Grid container spacing={0}>
        <Grid item xs={3}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
        </Grid><Grid item xs={3}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
        </Grid><Grid item xs={3}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Grid>
        </Grid>
        </Grid>
        <Grid item xs={1}>
         <ContentPasteIcon/>
        </Grid>
        <Grid item xs={1}>
<DeleteIcon/>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{flexGrow: 1 , marginTop:1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
        <Grid container spacing={0}>
        <Grid item xs={7}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
</Grid>
<Grid item xs={5}>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Grid>

        </Grid>
                </Grid>
        <Grid item xs={5}>
      
        <Grid container spacing={0}>
        <Grid item xs={3}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
        </Grid><Grid item xs={3}>
        <TextField id="outlined-basic" type="number" variant="outlined" />
        </Grid><Grid item xs={3}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Grid>
        </Grid>
        </Grid>
        <Grid item xs={1}>
         <ContentPasteIcon/>
        </Grid>
        <Grid item xs={1}>
<DeleteIcon/>
        </Grid>
      </Grid>
    </Box>
    
  </div>
      );
}
