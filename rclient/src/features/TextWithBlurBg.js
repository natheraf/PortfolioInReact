import { Box, Typography } from "@mui/material";

export const TextWithBlurBg = ({ text, variant }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backdropFilter: "blur(4px)",
        }}
      >
        <Typography variant={variant} sx={{ visibility: "hidden" }}>
          {text}
        </Typography>
      </Box>
      <Typography
        variant={variant}
        color="white"
        sx={{
          mixBlendMode: "difference",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
