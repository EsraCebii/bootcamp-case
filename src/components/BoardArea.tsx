import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import MenuItem from "@mui/material/MenuItem";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { CardHeader } from "@mui/material";
import ListContent from "./ListContent";
import ListModal from "./ListModal";

const style = {
  position: "absolute" as "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BoardArea() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <div>
      <Card sx={{ maxWidth: 345, m: 5, borderRadius: 1 }}>
        <CardHeader
          action={
            <Box>
              <IconButton aria-label="more" onClick={handleOpenNavMenu}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <IconButton size="small" disableRipple>
                    <DeleteIcon />
                    Remove List
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <IconButton size="small" disableRipple >
                    <DriveFileRenameOutlineIcon />
                    Rename List
                  </IconButton>{" "}
                </MenuItem>
              </Menu>
            </Box>
          }
          title="List Name"
        />

        <Button onClick={handleOpen}>
          <CardContent>
            <ListContent />
          </CardContent>
        </Button>
        <CardActions disableSpacing>
          <IconButton aria-label="add a new board">
            <AddIcon />
          </IconButton>
          <Typography color="text.secondary">add a new board</Typography>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <ListModal />
        </Card>
      </Modal>
    </div>
  );
}
