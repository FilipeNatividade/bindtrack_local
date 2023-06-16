import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    '& .MuiInputLabel-root': {
      // display: 'none',
    },
    '& .MuiInputLabel-shrink.Mui-focused': {
      color: '#c2c2c2',
      marginTop: '-7px',
      display: 'none',
      zIndex:3,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        backgroundColor: '#fff',
      },
    },
    '&:hover fieldset': {
      borderColor: '#c2c2c2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#c2c2c2',
    },

    '&.css-1698nmb-MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input':
      {
        color: '#1976d2',
        zIndex: 2,
      },
  },
});
export const Dropbox = () => {
  const classes = useStyles();

  const handleAutocompleteChange = (event, value) => {
    localStorage.setItem('client', value.label);
    window.location.reload();
  };

  const getOptionValue = (option) => option.id;
  const getOptionLabel = (option) => option.label;
  return (
    <Autocomplete
      className={classes.input}
      options={top100Films}
      size="small"
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField {...params} label="Escolha um cliente" />
      )}
      onChange={handleAutocompleteChange}
      sx={{
        width: 250,
        '.MuiAutocomplete-popupIndicator': {
          zIndex: 2,
        },
      }}
    />
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
  { label: '12 Angry Men' },
  { label: "Schindler's List" },
  { label: 'Pulp Fiction' },
];
