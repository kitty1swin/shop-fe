import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { mockedProducts } from "./mockedProducts";
import { ProductCard } from "../../components/ProductCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setFeedbacks } from "../../redux/slices/globalSlice";

export const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.global.products);
  const feedbacks = useSelector((state) => state.global.feedbacks);

  useEffect(() => {
    axios
      .get("http://localhost:5026/api/Product")
      .then((data) => dispatch(setProducts(data.data)))
      .catch((e) => console.log("Products is not loaded", e));
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("http://localhost:5026/api/Feedback")
      .then((data) => dispatch(setFeedbacks(data.data)))
      .catch((e) => console.log("Feedbacks is not loaded", e));
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h3" sx={{ my: 2 }}>
        Популярные десерты
      </Typography>
      <Grid container spacing={12}>
        {((products.length && products) || mockedProducts).map((product) => (
          <Grid
            item
            sx={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.4}
            key={product.Name}
            height="100%"
          >
            <ProductCard
              name={product.Name}
              image={product.Image}
              description={product.Description}
              price={product.Price}
              category={product.Category}
              id={product.Id}
              feedbacks={feedbacks.filter(
                (item) => item.ProductId === product.Id
              )}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
