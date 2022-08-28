import { PetCard } from "./pet-card";
import Pet from "./../models/pet";
import { Grid } from "@mui/material";
import React from 'react'

const PetList: React.FC<{pets: Pet[]}> = (props) => {
  return (
    <Grid container spacing={3}>
      {props.pets.map((pet: Pet) => (
        <Grid item key={pet.id} lg={4} md={6} xs={12}>
          <PetCard pet={pet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PetList;
