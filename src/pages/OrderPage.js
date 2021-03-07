// import {makeStyles} from "@material-ui/core";
import Cuisines from "../components/Cuisines";
import AppBarSearch from "../components/OrderPageAppBar";

// const useStyles = makeStyles(() => ({
//   toolbar: {
//     backgroundColor: "white",
//     // shadows: "white"
//   },
// }));

function OrderPage() {
  return (
    <div>
      <AppBarSearch />
      <Cuisines />
    </div>
  );
}

export default OrderPage;
