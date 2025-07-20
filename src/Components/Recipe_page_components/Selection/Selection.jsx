import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as React from 'react';
function Selection(props) {
    const [value, setValue] = React.useState('Basic');
    const handleChange = (event) => {
        setValue(event.target.value);
        props.selectVal(event.target.value);
    };
    return (
      <>
    <FormControl sx={{ mt: 2, width: 1 }}>
      <FormLabel id="demo-row-radio-buttons-group-label">Sort by</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={value}
      >
        <FormControlLabel value="Basic" control={<Radio />} label="Basic" />
        <FormControlLabel value="A-Z" control={<Radio />} label="A-Z" />
        <FormControlLabel value="Time" control={<Radio />} label="Time" />
      </RadioGroup>
    </FormControl>
      </>
    )
  }
  export default Selection