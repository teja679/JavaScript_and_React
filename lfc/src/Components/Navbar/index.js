import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Navbar() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  return (
    <div className='navbar'>
    <h1>LFC</h1>
    <ToggleButtonGroup
      fullWidth
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      >
      <ToggleButton value="home">Home</ToggleButton>
      <ToggleButton value="activities">Activities</ToggleButton>
      <ToggleButton value="contact">Contact</ToggleButton>
    </ToggleButtonGroup>
      </div>
    )
}

export default Navbar