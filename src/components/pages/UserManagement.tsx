import { memo, VFC } from "react";
import { Box, Stack, Wrap, WrapItem } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
        <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md">
          <Stack textAlign="center"></Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
