import styled from "@emotion/styled";
import { Box, Container, Grid, Pagination } from "@mui/material";

export const PageContent = (props) => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          left: { lg: 280 },
          width: {
            lg: "calc(100% - 280px)",
          },
          marginLeft: "280px",
        }}
      >
        <Container maxWidth={false}>
          {props.page}

          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}></Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};
