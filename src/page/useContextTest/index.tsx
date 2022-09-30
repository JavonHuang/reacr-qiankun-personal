import React,{useContext,useState} from 'react'
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

export default function App() {
  const [_themes, setThemes] = useState(themes.dark);
  const change = () => {
    if (_themes === themes.light) {
      setThemes(themes.dark)
    } else { 
      setThemes(themes.light)
    }
  }
  return (
    <ThemeContext.Provider value={_themes}>
       <button onClick={change}>
        Click me
      </button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props:any) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}