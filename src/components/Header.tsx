import { Container, Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles";

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          React Drag and Drop
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          An simple app to practice all the concepts of react Drag and drop
          Library
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/atlassian/react-beautiful-dnd/"
                target="_blank"
                rel="no-openner"
                onDrop={() => console.log("HOla PAPU")}
              >
                Ver documentacion Oficial
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
