import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TableData from "./Table";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: 200,
  },
  Link_: {
    textDecoration: "none",
    color: "#ffff",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>CRUD OPERATION</h1>
      <Link className={classes.Link_} to="/insert">
        <Button variant="contained" color="primary" className={classes.button}>
          ADD DATA
        </Button>
      </Link>
      <TableData />
    </div>
  );
};

export default Home;
