import { Box } from "@mui/material";

const SideBar = () => {
    return (<Box flex={1} p={2}
        sx={{ display: {xs:"none", sm:"block"} }}>SideBar</Box>);
}

export default SideBar;