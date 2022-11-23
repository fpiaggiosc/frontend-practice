import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFormContext } from "react-hook-form";
import useStyles from "./formTest2.styles";

const NestedInputContainer = () => {
  const { classes } = useStyles();
  const methods = useFormContext();
  return (
    <Box className={classes.inputWrapper}>
      <p> /formTest2/NestedInput </p>
      <p> Nested component 👇</p>
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
  );
};
export default NestedInputContainer;
