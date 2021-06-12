import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const currencies = [
  {
    value: 'CARS',
    label: 'CARS',
  },
  {
    value: 'BIKES',
    label: 'BIKES',
  },
  {
    value: 'PHONES',
    label: 'PHONES',
  },
  {
    value: 'OTHER',
    label: 'OTHER',
  },
];



export default function BasicTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = useState("Cars");



  const [title, setTitle] = useState("")


  const ctaTitleHandler = (e) =>{

    console.log("title state")
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Title" onChange={ctaTitleHandler} />
      <TextField id="standard-basic" label="Description" />
      <TextField
        id="standard-select-currency"
        select
        label="Category"
        value={currency}
        // onChange={handleChange}
        helperText="Please select category"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField id="standard-basic" label="Detail" />
      <TextField id="standard-basic" label="Location" />
      <TextField
        id="standard-basic"
        label="Price (PKR)"
        
      />
      
    </form>
  );
}
