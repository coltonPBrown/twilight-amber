import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useState } from "react";
import AddressForm from "../AddressForm";
import Confirmation from "../Confirmation";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Details"];

export default function Checkout({ cart }: any) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
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
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
}
