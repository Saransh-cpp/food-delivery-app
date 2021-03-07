import { AppBar, makeStyles, TextField, Toolbar } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: "white",
    // shadows: "white"
  },
}));

function AppBarSearch() {
  const classes = useStyles();

  return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <LocationOnOutlined
            style={{
              color: "black",
              margin: "5px",
            }}
          />
          <TextField fullWidth placeholder="Your Address" />
        </Toolbar>
      </AppBar>
  );
}

export default AppBarSearch;
