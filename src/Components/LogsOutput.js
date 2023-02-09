import React from "react";
import { TextField, Paper } from "@mui/material";
// import { useStyles } from "./Styles";

export default function LogsOutput({ value }) {
  // const classes = useStyles();
  return (
    <div className="OutputLogs">
    <label>OUTPUT</label>
      <Paper elevation={6}>
        <TextField
          variant="standard"
          placeholder="Output"
          multiline
          rows={9}
          value={value}
          // className={classes.InputOutput}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Paper>
    </div>
  );
}
