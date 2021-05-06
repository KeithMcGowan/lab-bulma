import "bulma/css/bulma.css";
import "./App.css";
import FormField from "./formfield/FormField";
import Navbar from "./navbar/Navbar";
import CoolButton from "./coolButton/CoolButton";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="formField">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>

      <div className="button">
        <CoolButton isLink isWarning className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>
    </div>
  );
}

export default App;
