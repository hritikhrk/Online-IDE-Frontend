import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     minWidth: 120,
//     margin: theme.spacing(4),
//   },
//   customButtom: {
//     margin: theme.spacing(4),
//     minHeight: 54,
//     minWidth: 100,
//   }
// }));

export const Header = function () {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Online IDE</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const HeadSection = function ({
  onChangeLanguage,
  value,
  runCode,
  status,
}) {
  // const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item md={3}>
        <FormControl variant="filled" /*className={classes.formControl}*/>
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={value}
            onChange={(event) => onChangeLanguage(event.target.value)}
            label="Age"
          >
            <MenuItem value={"python"}>Python 3</MenuItem>
            <MenuItem value={"java"}>Java</MenuItem>
            <MenuItem value={"c_cpp"}>C++ 17</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => runCode()}
          disabled={status === "Run" ? false : true}
          size="large"
          // className={classes.customButtom}
        >
          {status}
        </Button>
      </Grid>
    </Grid>
  );
};
