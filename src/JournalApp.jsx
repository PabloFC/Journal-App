import AppRouter from "./router/AppRouter";
import AppTheme from "./theme/AppTheme";

const JournalApp = () => {
  return (
    <div>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </div>
  );
};

export default JournalApp;
