import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Header = () => {
  const navigate = useNavigate();
  const linkStyle = { textDecoration: "none", color: "white" };

  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        backdropFilter: "blur(3px)",
        backgroundColor: "transparent",
      }}
      elevation={0}
    >
      <Toolbar variant="dense">
        <Grid
          container
          justifyContent={{ xs: "space-around", sm: "space-between" }}
        >
          <Stack direction="row" alignItems={"center"} spacing={5} pr={5}>
            {["About"].map((title) => (
              <Link key={title} to={"/"} style={linkStyle}>
                <Typography variant="h5">{title}</Typography>
              </Link>
            ))}
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Tooltip title="GitHub">
              <IconButton
                onClick={() =>
                  window.open("https://github.com/natheraf", "_blank").focus()
                }
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
