import React, { useEffect, useState } from "react";
import SearchSection from "./SearchSection";
import ListingCarousel from "../Carousel/ListingCarousel";
import { Box, Container, Text, createStyles } from "@mantine/core";
import AgenciesCarousel from "../Carousel/AgenciesCarousel";
import axios from "axios";
import { useMediaQuery } from "@mantine/hooks";

const Hero = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [house, setHouse] = useState([]);
  const [flat, setFlat] = useState([]);
  const [plot, setPlot] = useState([]);
  const [file, setFile] = useState([]);

  const match500 = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + "/user/getAllProperties"
      )
      .then((data) => {
        setIsLoaded(false);
        setHouse(
          data.data.body.filter(
            (property) =>
              property.propertySubCategory === "farmhouse" ||
              property.propertySubCategory === "house"
          )
        );
        setFlat(
          data.data.body.filter(
            (property) => property.propertySubCategory === "flat"
          )
        );
        setPlot(
          data.data.body.filter(
            (property) => property.propertySubCategory === "plot"
          )
        );
        setFile(
          data.data.body.filter(
            (property) => property.propertySubCategory === "file"
          )
        );
      })
      .catch((error) => {
        setIsLoaded(false);
        setError(error);
      });
  }, []);

  return (
    <>
      <SearchSection />
      <Container size={"xl"} mt={"xl"}>
        <Box style={{ padding: 20 }}>
          <Text
            weight={600}
            mb={"xl"}
            style={{
              fontSize: match500 ? "1.3rem" : "1.7rem",
            }}
          >
            Premiere House Listings
          </Text>
          <ListingCarousel listings={house} loading={isLoaded} error={error} />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text
            weight={600}
            mb={"xl"}
            style={{
              fontSize: match500 ? "1.3rem" : "1.7rem",
            }}
          >
            Hot Flat Listings
          </Text>
          <ListingCarousel listings={flat} loading={isLoaded} error={error} />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text
            weight={600}
            mb={"xl"}
            style={{
              fontSize: match500 ? "1.3rem" : "1.7rem",
            }}
          >
            Latest Plot Listings
          </Text>
          <ListingCarousel listings={plot} loading={isLoaded} error={error} />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text
            weight={600}
            mb={"xl"}
            style={{
              fontSize: match500 ? "1.3rem" : "1.7rem",
            }}
          >
            Featured Files
          </Text>
          <ListingCarousel listings={file} loading={isLoaded} error={error} />
        </Box>
        <Box style={{ paddingRight: 20, paddingLeft: 20 }}>
          <Text
            weight={600}
            mb={"xl"}
            style={{
              fontSize: match500 ? "1.3rem" : "1.7rem",
            }}
          >
            Featured Agencies Listings
          </Text>
          <AgenciesCarousel />
        </Box>
      </Container>
    </>
  );
};

export default Hero;
