// const { default: Cuisines } = require("../components/Cuisines");
import Cuisines from '../components/Cuisines';

function OrderPage() {
    return(
        <div>
            <h1>
            Order Page
        </h1>
        <Cuisines />
        </div>
    );
}

export default OrderPage;