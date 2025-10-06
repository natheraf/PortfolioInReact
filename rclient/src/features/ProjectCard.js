import { useTheme } from "@emotion/react";
import {
  Box,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";

export const ProjectCard = ({
  title,
  grayTitle,
  subTitle,
  description,
  technologies,
  image,
  imageSrc,
}) => {
  const theme = useTheme();
  const greaterThanLarge = useMediaQuery(theme.breakpoints.up("lg"));

  if (greaterThanLarge) {
    return (
      <Paper sx={{ width: 1000 }}>
        <Stack direction="row">
          <Stack spacing={3} sx={{ p: 2 }} justifyContent={"space-evenly"}>
            <Stack>
              <Stack spacing={1} direction={"row"}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="h5" color="GrayText">
                  {grayTitle}
                </Typography>
              </Stack>
              <Typography variant="subtitle" color="GrayText">
                {subTitle}
              </Typography>
            </Stack>
            <Typography variant="h6" color="lightgray">
              {description}
            </Typography>
            {
              <Grid container gap={2} direction={"row"}>
                {technologies.map((text) => (
                  <Grid item key={text}>
                    <Chip
                      label={text}
                      color="primary"
                      sx={{
                        fontSize: "1rem",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            }
          </Stack>
          <Box
            sx={{
              overflow: "hidden",
              width: "100%",
              maxWidth: "250px",
              height: "250px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: image,
              maskImage: "linear-gradient(to right, transparent, black 10%)",
              borderRadius: 1,
            }}
          />
        </Stack>
      </Paper>
    );
  } else {
    return (
      <Paper sx={{ width: "100%" }}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Box
            sx={{
              width: "100%",
              height: 180,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: image,
              borderRadius: 1,
              mb: 2,
            }}
          />
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h6" color="GrayText">
              {grayTitle}
            </Typography>
          </Stack>
          <Typography variant="subtitle2" color="GrayText">
            {subTitle}
          </Typography>
          <Typography variant="body2" color="lightgray">
            {description}
          </Typography>
          <Grid container gap={1} direction="row">
            {technologies.map((text) => (
              <Grid item key={text}>
                <Chip
                  label={text}
                  color="primary"
                  sx={{
                    fontSize: "0.9rem",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Paper>
    );
  }
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  grayTitle: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.array,
  image: PropTypes.string,
  imageSrc: PropTypes.string,
};
