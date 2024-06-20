import JournalLayout from "../layout/JournalLayout";
import NothingSelectedView from "../views/NothingSelectedView";

const JournalPages = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
        error incidunt odit ex labore cum, id expedita dignissimos consequatur
        fuga atque ea dolore suscipit praesentium nobis omnis enim a. Dolor?
      </Typography> */}
      <NothingSelectedView />
      {/* NoteView */}
    </JournalLayout>
  );
};

export default JournalPages;
