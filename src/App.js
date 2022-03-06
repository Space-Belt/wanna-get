import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default App;
