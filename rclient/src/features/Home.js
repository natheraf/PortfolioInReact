import * as React from "react";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { TextWithBlurBg } from "./TextWithBlurBg";
import { ProjectCard } from "./ProjectCard";

export const Home = () => {
  const [bgImageNumber, setBgImageNumber] = React.useState("47089555");

  const setRandomBackGround = () => {
    const files = [
      "47089555_p0.jpg",
      "88588892_p0.png",
      "89433360_p0.jpg",
      "90209969_p0.jpg",
      "90899797_p0.jpg",
      "91921895_p0.jpg",
      "93425255_p0.jpg",
      "94982142_p0.png",
    ];
    const randomFile = files[Math.floor(Math.random() * files.length)];
    setBgImageNumber(randomFile.substring(0, randomFile.indexOf("_")));
    const bgImage = document.getElementById("bg-img");
    bgImage.style.backgroundImage = `url(/bg_pictures/${randomFile})`;
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRandomBackGround();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack>
      <Stack
        spacing={3}
        sx={{
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          id="bg-img"
          sx={{
            position: "absolute",
            overflow: "hidden",
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "2s .5s",
            msTransition: "2s .5s",
            WebkitTransition: "2s .5s",
            backgroundImage: "url(/bg_pictures/47089555_p0.jpg)",
            zIndex: -1,
          }}
        />
        <TextWithBlurBg text="Eric Ma" variant={"h1"} />
        <TextWithBlurBg text="full stack developer" variant={"h4"} />
        <Box sx={{ padding: 1 }}>
          <Grid container spacing={1} direction={"row"} justifyContent="center">
            {["React", "Node.js", "Apache Server", "PostgreSQL", "MongoDB"].map(
              (text) => (
                <Grid item key={text}>
                  <Chip
                    label={text}
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      backgroundColor: "rgba(0, 0, 0, .5)",
                    }}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Stack>
      <Stack
        spacing={3}
        sx={{
          height: "100vh",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            sx={{ marginTop: 1 }}
            target="_blank"
            href={`https://www.pixiv.net/en/artworks/${bgImageNumber}`}
          >
            Image Source
          </Button>
        </Box>
        <Typography variant="h4">Experience</Typography>
        <ProjectCard />
        <Typography variant="h4">Projects</Typography>
      </Stack>
    </Stack>
  );
};
