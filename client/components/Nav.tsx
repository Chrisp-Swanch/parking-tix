import { Link } from 'react-router-dom'
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
  Avatar,
  Box,
  Divider,
} from '@mui/material'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'

function Nav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { user, logout, loginWithRedirect } = useAuth0()
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    logout()
  }

  const handleLogIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#063970' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <ReceiptLongIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Parking<span className="span-logo">Tix</span>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
            </Button>
            <Link
              to="/disputes"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button color="inherit">Disputes</Button>
            </Link>
            <Link
              to="/disputes/add"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button color="inherit">Dispute your tix</Button>
            </Link>
            <IfNotAuthenticated>
              <Button variant="outlined" color="inherit" onClick={handleLogIn}>
                Login
              </Button>
            </IfNotAuthenticated>
          </Stack>
          <IfAuthenticated>
            <>
              {console.log(user)}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar src={user?.picture} />
              </IconButton>
              <Menu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <Box sx={{ textAlign: 'left', p: '5px' }}>
                  <Typography variant="body1">{user?.name}</Typography>
                  <Typography variant="subtitle1">{user?.email}</Typography>
                </Box>
                <Divider light sx={{ m: 'auto' }} />
                <MenuItem onClick={handleClose} disableRipple>
                  <PersonOutlineOutlinedIcon />
                  Profile
                </MenuItem>
                <Divider light sx={{ m: 'auto' }} />
                <MenuItem onClick={handleClose} disableRipple>
                  <TuneOutlinedIcon />
                  Settings
                </MenuItem>
                <Divider light sx={{ m: 'auto' }} />
                <MenuItem
                  sx={{ alignSelf: 'center' }}
                  onClick={handleLogOut}
                  disableRipple
                >
                  Sign Out
                </MenuItem>
              </Menu>
            </>
          </IfAuthenticated>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Nav
