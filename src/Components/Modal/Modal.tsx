import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function ModalCustom({ children, open, onClose, title }: ModalProps) {

  return (
    <Modal
      open={open}
      onClose={onClose}
      disableAutoFocus
      sx={{
        width: '100%'
      }}
      slots={{ backdrop: Backdrop }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
}