import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Button, Collapse } from "@material-ui/core";
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
  const [less, setLess] = React.useState(true);
  const arr = new Array(15);
  arr.fill(0);

  return (
    <div>
      <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {arr.slice(0, 6).map((item, idx) => {
        return (
          <Avatar className={classes.avatar} key={idx} src="/logo192.png" />
        );
      })}

      
    </Box>

    <Collapse in={!less}>
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {arr.slice(6, arr.length).map((item, idx) => {
        return (
          <Avatar className={classes.avatar} key={idx} src="/logo192.png" />
        );
      })}
    </Box>
    </Collapse>
    <Button
        onClick={() => {
          setLess(!less);
        }}
      >
        Show more
      </Button>
    </div>
  );
}
