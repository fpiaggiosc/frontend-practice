import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import NestedInputContainer from "./NestedInputContainer";
import useStyles from "./formTest2.styles";

const VALIDATION_SCHEMA = yup
  .object()
  .shape({
    name: yup.string().min(5, "Min 5 charcters").required("This field is required"),
    phone: yup.string().length(5),
  })
  .required();

const DEFAULT_VALUES = {
  name: "Test name",
  phone: "",
};

const FormTest2 = () => {
  const { classes } = useStyles();
  const methods = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(VALIDATION_SCHEMA),
  });

  const onSubmit = (data) => {
    console.log(methods.formState, data);
  };

  return (
    <FormProvider {...methods}>
      <div className={classes.container}>
        <h2>Using form context</h2>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedInputContainer />
          <Box className={classes.inputWrapper}>
            <p> /formTest2 </p>
            <p> Same scope as root 👇</p>
            <TextField
              required
              fullWidth
              {...methods.register("phone")}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              label="Phone"
              error={!!methods.formState.errors.phone?.message}
              helperText={methods.formState.errors.phone?.message}
            />
          </Box>
          <Button type="submit" variant="contained">
            Send
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default FormTest2;
