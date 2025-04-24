import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MaterialUIDemo() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
      >
        Contained
      </Button>
      <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </div>
  );
}
