import ChipView from "../components/Chips";
import Cuisines from "../components/Cuisines";
import AppBarSearch from "../components/OrderPageAppBar";

function OrderPage() {
  return (
    <div>
      <AppBarSearch />
      <ChipView />
      <Cuisines />
    </div>
  );
}

export default OrderPage;
