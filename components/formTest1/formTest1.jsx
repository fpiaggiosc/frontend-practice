import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import useStyles from "./formTest1.styles";

const VALIDATION_SCHEMA = yup
  .object()
  .shape({
    name: yup.string().max(5, "Max 5 charcters").required("This field is required"),
    email: yup.string().email().required(),
  })
  .required();

const DEFAULT_VALUES = {
  name: "Test name",
  email: "",
};

const FormTest1 = () => {
  const { classes } = useStyles();
  const methods = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(VALIDATION_SCHEMA),
  });

  const onSubmit = (data) => {
    console.log(methods.formState, data);
  };

  return (
    <div className={classes.container}>
      <h2>UseForm hook</h2>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box className={classes.inputWrapper}>
          <TextField
            {...methods.register("name")}
            required
            fullWidth
            name="name"
            id="outlined-required"
            label="First name"
            error={!!methods.formState.errors.name?.message}
            helperText={methods.formState.errors.name?.message}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <TextField
            {...methods.register("email")}
            required
            fullWidth
            name="email"
            id="outlined-required"
            label="Email"
            error={!!methods.formState.errors.email?.message}
            helperText={methods.formState.errors.email?.message}
          />
        </Box>
        <Button type="submit" variant="contained">
          Send
        </Button>
      </form>
      <DevTool control={methods.control} />
    </div>
  );
};

export default FormTest1;
