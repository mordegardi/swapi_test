import React from "react";
// @ts-ignore
import styles from "./SwPeople.module.css";
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export function SwPeople() {
  const swPeople: any[] = [];

  return (
    <Box className={styles.swPeople}>
      <Typography variant="h3" mb={2} className={styles.title}>
        Star Wars API
      </Typography>
      <Box className={styles.swPeopleList}>
        <Box className={styles.swPeopleSearch}>
          <form>
            <TextField
              id="swPeople"
              label="Search for a person"
              variant="outlined"
            />

            <FormControl className={styles.radios}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </form>
        </Box>

        <List>
          {Boolean(swPeople.length) ? (
            swPeople.map((swPerson) => (
              <ListItem key={swPerson.name}>
                <ListItemButton>
                  <ListItemText primary={swPerson.name} />
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <Box p={2}>No results</Box>
          )}
        </List>
      </Box>
    </Box>
  );
}
