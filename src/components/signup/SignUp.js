import "./signup.css"


import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Signup(){
     const classes = useStyles();
    return (
      <>
        <h2 className="Head"> Create An Account </h2>
        <div className="main-div">
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                type="text"
                required
                label="Name"
                className="child"
              />
              <TextField
                id="standard-basic"
                type="mail"
                required
                label="E-mail"
                className="child"
              />
              <TextField
                id="standard-basic"
                type="password"
                required
                label="Password"
                className="child"
              />
            </form>
            <Button variant="outlined" color="primary" className="child">
              Submit
            </Button>
          </div>
        </div>
      </>
    );
}
export default Signup;



