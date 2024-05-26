import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// todo: add publishable key
const stripePromise = loadStripe("");

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay for eat."
      ></SectionTitle>
    </div>
  );
};

export default Payment;
