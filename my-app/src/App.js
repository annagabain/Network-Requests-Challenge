import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
// import Content from "./components/ContentAPI";
// import ContentHooks from "./components/ContentHooks";
import ContentAPIHooks from "./components/ContentAPIHooks";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
{/* 
      <Content />

      <ContentHooks /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;