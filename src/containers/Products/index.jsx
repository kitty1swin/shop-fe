import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { mockedProducts } from "./mockedProducts";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  return (
    <Box>
      <Typography variant="h3">Популярные десерты</Typography>
      <Grid container spacing={12}>
        {mockedProducts.map((product) => (
          <Grid item sx={12} sm={6} md={4} lg={3} xl={2.4} key={product.name}>
            <ProductCard
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
