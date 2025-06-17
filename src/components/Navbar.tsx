import { AppBar, Badge, Box, Button, Fade, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import CameraIcon from '@mui/icons-material/Camera';
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>MUI</Typography>
                <CameraIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="success">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="success">
                        <Notifications />
                    </Badge>
                </Icons>
                <div>
                    <Button
                        variant="contained"
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </Button>
                    <Menu
                        id="fade-menu"
                        slotProps={{
                            list: {
                                'aria-labelledby': 'fade-button',
                            },
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </StyledToolbar>
        </AppBar>
    );
}

export default Navbar;