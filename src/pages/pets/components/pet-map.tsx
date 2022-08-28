import { PetCard } from "./pet-card";
import Pet from "./../models/pet";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import React from "react";

const PetMap: React.FC<{ pets: Pet[] }> = (props) => {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      {/* {props.pets.map((pet: Pet) => (
        <Grid item key={pet.id} lg={4} md={6} xs={12}>
          <PetCard pet={pet} />
        </Grid>
      ))} */}

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Card sx={{ minWidth: 400, minHeight: 400 }}>
          <CardMedia
            component="img"
            height="400"
            image="https://leafletjs.com/examples/quick-start/thumbnail.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              MAP COMING SOON!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default PetMap;
