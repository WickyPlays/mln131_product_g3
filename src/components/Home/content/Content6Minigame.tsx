import React, { useState } from "react";
import { Button, Modal, Box, Slide } from "@mui/material";
import "./Content6Minigame.scss";

export default function Content6Minigame() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="content6-minigame">
      <div className="cover">
        <p className="title">
          <span className="node">6</span> Minigame
        </p>
        <p className="desc">
          Hãy cùng thử thách kiến thức của bạn thông qua trò chơi nhé!
        </p>
        <Button className="btn-join" onClick={handleOpen} disabled>
          Trò chơi chưa được mở vì đang thực hiện tại lớp
        </Button>
      </div>

      <Modal
        open={open}
        className="modal"
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide in={open} direction="up">
          <Box className="modal-content">
            <iframe
              style={{width: '100%', height: '100%'}}
              src="https://wordwall.net/vi/embed/32b46d74745d48e29741ea94c8483e47?themeId=41&templateId=3&fontStackId=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <Button className="btn-close" variant="contained" onClick={handleClose}>
              Đóng
            </Button>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}
