import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import CubeScene from "../src/3D/cube";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hello, Beechain!
        </Typography>
        <Container sx={{ height: 500 }}>
          <CubeScene />
        </Container>
        <Link href="/about" color="secondary">
          Routing test
        </Link>
      </Box>
    </Container>
  );
}
