import { loadStripe } from "@stripe/stripe-js";
import SectionTittle from "../../../HomeComponent/SectionTittle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// todo add a[published key
const stripePromise =loadStripe(import.meta.env.VITE_payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
                 <SectionTittle heading="Payment" subHeading="Please pay to eat"></SectionTittle>
                 <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                 </Elements>
        </div>
    );
};

export default Payment;