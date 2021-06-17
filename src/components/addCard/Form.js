import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";

// import the action 
import {AddCard} from "../../redux/actions/Action"

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
    value: "CARS",
    label: "CARS",
  },
  {
    value: "BIKES",
    label: "BIKES",
  },
  {
    value: "PHONES",
    label: "PHONES",
  },
  {
    value: "OTHER",
    label: "OTHER",
  },
];

export default function BasicTextFields({setOpen}) {
  const classes = useStyles();
  const [currency, setCurrency] = useState("Cars");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categ, setCateg] = useState("");
  const [detail, setDetail] = useState("");
  const [loc, setLoc] = useState("");
  const [price, setPrice] = useState("");


  const dispatch = useDispatch()

  const close = () => {
    setOpen(false);
  };

  const ctaHandler = () => {
    if (
      title === "" ||
      desc === "" ||
      categ === "" ||
      detail === "" ||
      loc === "" ||
      price === ""
    ) {
      alert("Please Fill All Fields!");
    } else {
        let newCard = {
          cardTitle: title,
          cardDesc: desc,
          cardCateg: categ,
          cardDetail: detail,
          cardLoc: loc,
          cardPrice: price,
        };

        console.log("data is before ", newCard);
        dispatch(AddCard(newCard));
      console.log("data is after ", newCard);
      setTitle("");
      setDesc("");
      setCateg("");
      setDetail("");
      setLoc("");
      setPrice("");

      close()
      
    }
  };



  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        required
        id="standard-basic"
        label="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        required
        id="standard-basic"
        label="Description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <TextField
        required
        id="standard-select-currency"
        select
        label="Category"
        value={currency}
        onChange={(e) => {
          setCateg(e.target.value);
        }}
        helperText="Please select category"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        id="standard-basic"
        label="Detail"
        onChange={(e) => {
          setDetail(e.target.value);
        }}
      />
      <TextField
        required
        id="standard-basic"
        label="Location"
        onChange={(e) => {
          setLoc(e.target.value);
        }}
      />
      <TextField
        required
        type="number"
        id="standard-basic"
        label="Price (PKR)"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <DialogActions>
        <Button autoFocus onClick={ctaHandler} color="primary">
          Add Product
        </Button>
      </DialogActions>
    </form>
  );
}
