import ChipView from "../components/Chips";
import Cuisines from "../components/Cuisines";
import AppBarSearch from "../components/OrderPageAppBar";
import StripeButtonComponent from "../components/StripePayment";

function OrderPage() {
  return (
    <div>
      <AppBarSearch />
      <ChipView />
      <Cuisines />
      <StripeButtonComponent price={100} />
    </div>
  );
}

export default OrderPage;
