import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    maxWidth: "600px",
    border: "1px solid grey",
    margin: "50px auto",
    padding: "20px",
  },
  inputWrapper: {
    marginBottom: "50px",
  },
  input: {
    width: "100%",
  },
}));

export default useStyles;
