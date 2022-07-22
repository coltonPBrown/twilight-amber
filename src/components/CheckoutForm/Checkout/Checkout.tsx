import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import AddressForm from "../AddressForm";
import Confirmation from "../Confirmation";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping Address", "Payment Details"];

export default function Checkout({ cart }: any) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState("");
  const [shippingData, setShippingData] = useState({});

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm checkoutToken={checkoutToken} backStep={backStep} />
    );

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        console.log(token);
      } catch (error) {
        console.log("Error Generating Token");
        console.log(error);
      }
    };
    generateToken();
  }, [cart]);
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const backStep = () => setActiveStep((currentStep) => currentStep - 1);

  const next = (data: any) => {
    setShippingData(data);
    nextStep();
  };

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
}
