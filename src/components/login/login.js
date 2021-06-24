import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./login.css"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Login({setOpen}) {
  const classes = useStyles();

  return (
    <div className={classes.root} className="frm">
      <TextField
        id="standard-basic"
        label="E-Mail"
        autoComplete="off"
        className="field"
      />
      <TextField
        id="standard-basic"
        label="Password"
        autoComplete="off"
        className="field"
      />
      <Button variant="outlined" color="primary" className="field" onClick={setOpen}>
        Login
      </Button>
    </div>
  );
}
export default Login;
