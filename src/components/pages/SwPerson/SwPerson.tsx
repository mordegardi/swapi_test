import { Box, Button } from "@mui/material";
// @ts-ignore
import styles from "./SwPerson.module.css";

export function SwPerson() {
  return (
    <Box p={3}>
      <Button
        variant="contained"
        onClick={() => {}}
        className={styles.toListButton}
      >
        To SW people List
      </Button>
      <Box className={styles.personData}></Box>
    </Box>
  );
}
