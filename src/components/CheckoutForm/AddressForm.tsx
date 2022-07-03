import { Grid, Typography } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./FormInput";

export default function AddressForm() {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={FormInput}>
          <Grid container spacing={3}>
            <FormInput name={"firstName"} label={"First name"} required />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}
