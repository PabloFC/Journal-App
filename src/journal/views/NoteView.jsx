import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ImageGallery from "../components/ImageGallery";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";

const NoteView = () => {
  const { active: note } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  return (
    <Grid
      container
      className="animate__animated animate__fadeIn animate__faster"
      direction="row"
      justifyContent="space-between"
      alignContent="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={18} fontWeight="bold">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary">
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* Image Gallery */}
      <ImageGallery />
    </Grid>
  );
};

export default NoteView;
