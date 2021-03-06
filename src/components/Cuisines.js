import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box } from "@material-ui/core";
// import classes from "*.module.css";

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
  avatar: {
    padding: "10px",
  },
});

export default function Cuisines() {
  const classes = useStyles();

  const arr = new Array(15);
  arr.fill(0);

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {arr.map((item, idx) => {
        return (
          <Avatar className={classes.avatar} key={idx} src="/logo192.png" />
        );
      })}
    </Box>
  );
}
