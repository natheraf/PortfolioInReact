import {
  Chip,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <Paper sx={{ p: 4, width: "100%", marginTop: "3rem" }}>
      <Stack spacing={2} alignItems={"center"}>
        <Typography variant="h5">Thanks for stopping by!</Typography>
        <Stack spacing={1} direction={"row"}>
          <IconButton
            onClick={() =>
              (window.location.href = "mailto:ericmaishere@gmail.com")
            }
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://github.com/natheraf", "_blank").focus()
            }
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window
                .open("https://www.linkedin.com/in/eric-ma-/", "_blank")
                .focus()
            }
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
        {
          <Grid container gap={2} direction={"row"} justifyContent={"center"}>
            {["React", "Node.js", "Oracle Cloud"].map((text) => (
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
    </Paper>
  );
};
