// Library Imports
import React from "react";
import { TextField, Paper } from '@mui/material'
// import { useStyles } from "./Styles";

const EditorInput = ({ value, onInputChange }) => {
  // const classes = useStyles();
  return (
    <div className="InputEditor">
    <label>INPUT</label>
      <Paper elevation={6}>
        <TextField
          variant="standard"
          placeholder="Input"
          multiline
          rows={9}
          value={value}
          onChange={(event) => onInputChange(event.target.value)}
          // className={classes.InputOutput}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Paper>
    </div>
  );
};

export default EditorInput;
