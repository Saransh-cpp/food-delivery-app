import { useEffect, useState } from "react";
import ChipView from "../components/Chips";
import Hotel from "../components/Hotel";
// import Cuisines from "../components/Cuisines";
import AppBarSearch from "../components/OrderPageAppBar";
import StripeButtonComponent from "../components/StripePayment";
import axios from "../utils/axios";

function OrderPage() {
  let [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/hotels").then((res) => {
      setHotels(res.data);
    });
  }, []);

  return (
    <div>
      <AppBarSearch />
      <ChipView />
      {/* <Cuisines /> */}
      <StripeButtonComponent price={100} />
      {hotels.map((hotel, index) => (
        <Hotel hotel={hotel} key={index}/>
      ))}
    </div>
  );
}

export default OrderPage;
