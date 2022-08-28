
import {Layout} from '../layout/layout'
import {PetCard} from '../../components/pets/pet-card'
import {Grid, Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import {pets} from '../../__mocks__/pets'
import React, {useEffect, useState} from 'react'
import Pet from './models/pet'
export const Pets = () => {

  const [places, setPlaces] = useState([]);
  const petsObjects : Pet[]= pets.map((pet)=>(new Pet(pet.id, pet.name, pet.city, pet.address)))
   

//   useEffect( () =>{
//     fetch("https://localhost:44345/api/places")
//     .then(res => res.json())
//     .then(
//       (result) => {
//           console.log(result)
//           setPlaces(
//           result
//         )      
//       },
//       (error) => {
//         setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
// }, [])
    
return (
         <Layout>


<Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {petsObjects.map((pet) => (
              <Grid
                item
                key={pet.id}
                lg={4}
                md={6}
                xs={12}
              >
                <PetCard pet={pet} />
              </Grid>
            ))}
          </Grid>
        </Box>
         
        </Layout>
    );
  };
