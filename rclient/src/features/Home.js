import * as React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { TextWithBlurBg } from "./TextWithBlurBg";
import { ProjectCard } from "./ProjectCard";
import DescriptionIcon from "@mui/icons-material/Description";

export const Home = () => {
  const files = React.useRef(null);
  const [bgImageSrc, setBgImageSrc] = React.useState(
    "https://www.pixiv.net/en/artworks/47089555"
  );

  const setRandomBackGround = () => {
    if (files.current === null) {
      return;
    }
    const randomFile =
      files.current[Math.floor(Math.random() * files.current.length)];
    setBgImageSrc(randomFile.link);
    const bgImage = document.getElementById("bg-img");
    bgImage.style.backgroundImage = `url(images/bg_pictures/${randomFile.file})`;
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRandomBackGround();
    }, 5000);
    fetch("background_images.csv")
      .then((res) => res.text())
      .then((resText) => {
        const newFiles = [];
        const lines = resText.split("\r\n");
        const head = lines[0].split(",");
        for (let index = 1; index < lines.length; index += 1) {
          const line = lines[index].split(",");
          const obj = {};
          for (let lineIndex = 0; lineIndex < head.length; lineIndex += 1) {
            obj[head[lineIndex]] = line[lineIndex];
          }
          newFiles.push(obj);
        }
        files.current = newFiles;
      });

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
            backgroundImage: "url(images/bg_pictures/47089555_p0.jpg)",
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
      <Stack spacing={5} alignItems={"center"}>
        <Box>
          <Button
            sx={{ marginTop: 1, color: "gray" }}
            target="_blank"
            href={bgImageSrc}
          >
            Image Source
          </Button>
        </Box>
        <Stack alignItems={"center"} spacing={3} sx={{ padding: "0 1rem" }}>
          <Typography variant="h3">Projects</Typography>
          <ProjectCard
            title="CRM"
            grayTitle="Full Stack"
            subTitle="@hypoflo (Neuraxis)"
            description="Feature-rich CRM platform with intuitive contact management, sales pipeline tracking, and seamless team collaboration."
            technologies={["React", "Node.js", "PostgreSQL", "AWS"]}
            image="url(images/CRM.jpg)"
            imageSrc="https://unsplash.com/photos/laptop-computer-on-glass-top-table-hpjSkU2UYSU"
          />
          <ProjectCard
            title="College Club Website"
            grayTitle="Front End"
            subTitle="@Koppelman School of Business"
            description="Comprehensive events calendar with RSVP management, real-time updates, and automated email notifications."
            technologies={["React", "CI/CD", "GitHub Actions"]}
            image="url(images/club.jpg)"
            imageSrc="https://unsplash.com/photos/smartphone-screen-showing-facebook-application-D2TZ-ashGzc"
          />
          <ProjectCard
            title="EPUB Reader"
            grayTitle="Full Stack"
            subTitle=""
            description="Next-generation EPUB reader with gesture-based navigation, immersive reading modes, and cloud sync across all your devices."
            technologies={["React", "Node.js", "MongoDB", "IndexedDB"]}
            image="url(images/reader.jpg)"
            imageSrc="https://unsplash.com/photos/graphical-user-interface-application-bmdMcsnFyCc"
          />
          <ProjectCard
            title="Media Downloader"
            grayTitle="Full Stack"
            subTitle=""
            description="Powerful media downloader supporting 1000+ sites with format selection, playlist handling, and batch processing."
            technologies={["Apache Server", "PHP", "JavaScript", "HTML", "CSS"]}
            image="url(images/media.jpg)"
            imageSrc="https://unsplash.com/photos/a-pair-of-mp3-players-sitting-next-to-each-other-csIWQzzcLYo"
          />
          <Button
            target="_blank"
            href={`https://drive.google.com/file/d/17x1upij5xTROGiYUJ0PstGCib_YfYIsj/view?usp=sharing`}
            endIcon={<DescriptionIcon />}
            variant="contained"
          >
            View Resume
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
