import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useStyles from "./formTest3.styles";

const VALIDATION_SCHEMA = yup
  .object()
  .shape({
    name: yup.string().min(5, "Min 5 charcters").required("This field is required"),
  })
  .required();

const DEFAULT_VALUES = {
  name: "Test name",
};

const FormTest3 = () => {
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
        <h2>Controller component</h2>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box className={classes.inputWrapper}>
            <Controller
              control={methods.control}
              name="name"
              render={(formItem) => (
                <>
                  <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(formItem)}</pre>
                  <TextField
                    {...formItem.field}
                    fullWidth
                    label="With <Controller /> component"
                    error={Boolean(formItem.fieldState.error?.message)}
                    helperText={formItem.fieldState.error?.message}
                  />
                </>
              )}
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

export default FormTest3;
