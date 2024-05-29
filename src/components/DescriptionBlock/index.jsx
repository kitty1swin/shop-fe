import { Stack, Box } from "@mui/material";
import React from "react";

export const DescriptionBlock = ({ code, content }) => {
  return (
    <Stack direction="column" gap={0} spacing={0} bgcolor="primary.light">
      <Box>
        <img
          src="https://static.tildacdn.com/tild3838-3533-4133-a563-626165393832/125342970_7635019975.jpg"
          alt={code}
          width="100%"
        />
      </Box>

      <Box p={3}>{content}</Box>
    </Stack>
  );
};
