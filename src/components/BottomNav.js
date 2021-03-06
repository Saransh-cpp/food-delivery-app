import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {FavoriteBorderOutlined, RestoreIcon, LocationOnOutlined} from "@material-ui/icons";
// import FavoriteIcon from "@material-ui/icons/Restore";
// import FavoriteIcon from "@material-ui/icons/Restore";
// import FavoriteIcon from "@material-ui/icons/Restore";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // width: 500,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <BottomNavigation
      style={{
        position: "fixed",
        bottom: "0px",
        left: "0px",
        right: "0px"
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Order"
        value="/order"
        icon={<FavoriteBorderOutlined />}
      />
      <BottomNavigationAction
        label="Out"
        value="/out"
        icon={<FavoriteBorderOutlined />}
      />
      <BottomNavigationAction
        label="Gold"
        value="/gold"
        icon={<FavoriteBorderOutlined />}
      />
      <BottomNavigationAction
        label="Search"
        value="/search"
        icon={<FavoriteBorderOutlined />}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<FavoriteBorderOutlined />}
      />
    </BottomNavigation>
  );
}
