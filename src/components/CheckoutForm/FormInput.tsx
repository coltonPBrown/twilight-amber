import { Grid, TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

export default function FormInput({ name, label, required }: any) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={() => (
          <TextField fullWidth name={name} label={label} required={required} />
        )}
      />
    </Grid>
  );
}
