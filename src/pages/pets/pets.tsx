import { Layout } from "../layout/layout";
import { Box, Button, Typography } from "@mui/material";
import { pets } from "../../__mocks__/pets";
import { useState } from "react";
import Pet from "./models/pet";
import Display from "./models/displayType";
import { Map as MapIcon } from "../../assets/svg/map";
import { List as ListIcon } from "../../assets/svg/list";
import PetList from "./components/pet-list";
import PetMap from "./components/pet-map";

export const Pets = () => {
  const [places, setPlaces] = useState([]);
  const [display, setDisplay] = useState<Display>(Display.List);

  const toggleDisplay = (display: Display) => {
    setDisplay(display);
  };

  const petsObjects: Pet[] = pets.map(
    (pet) => new Pet(pet.id, pet.name, pet.city, pet.address)
  );

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
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Pets
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            startIcon={<ListIcon fontSize="small" />}
            sx={{ mr: 1 }}
            variant={display == Display.List ? "contained" : "text"}
            onClick={(e) => {
              toggleDisplay(Display.List);
            }}
          />
          <Button
            startIcon={<MapIcon fontSize="small" />}
            sx={{ mr: 1 }}
            variant={display == Display.Map ? "contained" : "text"}
            onClick={(e) => {
              toggleDisplay(Display.Map);
            }}
          />
        </Box>
      </Box>
      <Box sx={{ pt: 3 }}>
        {display == Display.List ? (
          <PetList pets={petsObjects} />
        ) : (
          <PetMap pets={petsObjects} />
        )}
      </Box>
    </Layout>
  );
};
