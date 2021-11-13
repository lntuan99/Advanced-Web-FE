import React from "react";
import { Fragment, useState,useContext } from "react";
import '../Nav.css';
import AuthContext from "../../../store/store";
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ListItemText } from "@mui/material";
const theme = createTheme({
    palette: {
        secondary: {
            // This is green.A700 as hex.
            main: '#2D2C2C',
            // main: '#ffffff',
        },
    },
});

function AvatarIcon() {
    const AuthCtx=useContext(AuthContext)
    //MenuAccount 
    const [anchorElAccountMenu, setAnchorElAccountMenu] = useState(null);
    const openAccountMenu = Boolean(anchorElAccountMenu);
    const handleClickAccountMenu = (event) => {
        setAnchorElAccountMenu(event.currentTarget);
    };
    const handleLogout=()=>{
        AuthCtx.onLogout();
    }
    const handleCloseAccountMenu = () => {
        setAnchorElAccountMenu(null);
    };
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClickAccountMenu} >
                        {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                        <Avatar alt={AuthCtx.user.name} sx={{ width: 37, height: 37 }} src="/images/avatar/rose.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorElAccountMenu}
                    open={openAccountMenu}
                    onClose={handleCloseAccountMenu}
                    onClick={handleCloseAccountMenu}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 0.1,
                            '& .MuiAvatar-root': {
                                width: 37,
                                height: 37,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                    <MenuItem>
                        <Avatar />
                        <ListItemText color='secondary'>{}</ListItemText>
                    </MenuItem>
                    <Divider />

                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" color='secondary'/>
                        </ListItemIcon>
                        <ListItemText color='secondary'>Settings</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" color='secondary' />
                        </ListItemIcon>
                        <ListItemText color='secondary'>Logout</ListItemText>
                        
                    </MenuItem>
                </Menu>
            </ThemeProvider>
        </Fragment >
    );
}
export { AvatarIcon };