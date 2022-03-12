import * as React from "react";
import { Button, formLabelClasses, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ListContent from "../List/ListContent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function NewList() {
  const [isAdd, setIsAdd] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [addCardMode, setAddCardMode] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addCardTitleMode, setAddCardTitleMode] = useState(false);

  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };
  const handleCloseEditModal = () => setOpenEditModal(false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAddTitle = () => {
    listTitle && setAddCardMode(true);
  };
  const handleEditCardTitle = () => {
    setAddCardTitleMode(true);
  };
  const handleDeleteCardTitle = () => {
    setCardTitle("");
    setAddCardTitleMode(false);
  };

  return (
    <>
      {!isAdd && (
        <Card sx={{ maxWidth: 345, m: 5, height: 30, p: 2, borderRadius: 3 }}>
          <Button startIcon={<AddIcon />} onClick={() => setIsAdd(true)}>
            Add a list
          </Button>
        </Card>
      )}

      {isAdd && !addCardMode && (
        <Card sx={{ maxWidth: 345, m: 5, p: 2, borderRadius: 3 }}>
          <Box>
            <TextField
              required
              id="standard-required"
              label="List Title"
              variant="standard"
              sx={{ m: 1 }}
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
            />
            <CloseIcon sx={{ mt: 3 }} onClick={(e) => setListTitle("")} />

            <Button
              variant="contained"
              sx={{ borderRadius: "18px", m: 2, bgcolor: "text.secondary" }}
              onClick={handleAddTitle}
            >
              Add
            </Button>
          </Box>
        </Card>
      )}
      {addCardMode && (
        <Card
          sx={{ maxWidth: 345, m: 5, borderRadius: 3, borderColor: "grey.500" }}
        >
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
                  <MenuItem>
                    <IconButton
                      size="small"
                      onClick={handleOpenEditModal}
                      disableRipple
                    >
                      <DriveFileRenameOutlineIcon />
                      Rename List
                    </IconButton>
                  </MenuItem>
                </Menu>
              </Box>
            }
            title={
              openEditModal ? (
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="list-title"
                    value={listTitle}
                    onChange={(e) => setListTitle(e.target.value)}
                    required
                    label="List title"
                    variant="standard"
                    sx={{ m: 0.5}}
                  ></TextField>
                  <CheckIcon  />
                </Box>
              ) : (
                listTitle
              )
            }
          />
          <Button onClick={handleOpen}>
            <CardContent>
              <ListContent />
            </CardContent>
          </Button>
          <Divider />
          {addCardTitleMode && (
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <TextField
                id="card-title"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                required
                label="Card title"
                variant="standard"
                sx={{ m: 3 }}
              />
              <CloseIcon onClick={handleDeleteCardTitle} sx={{ mb: 3.5 }} />
            </Box>
          )}
          {cardTitle !== "" && addCardTitleMode && (
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                ml: 2,
                mb: 2,
                bgcolor: "text.secondary",
              }}
            >
              Add
            </Button>
          )}
          {!addCardTitleMode && (
            <CardActions disableSpacing>
              <IconButton
                aria-label="add a card"
                disableRipple
                onClick={handleEditCardTitle}
              >
                <AddIcon />
                <Typography color="text.secondary">add a card</Typography>
              </IconButton>
            </CardActions>
          )}
        </Card>
      )}
    </>
  );
}

export default NewList;