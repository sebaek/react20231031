import Box, { color } from "./component/Box";
import Container, { color as containerColor } from "./component/Container";

function App() {
  return (
    <div>
      <Box style={{ color: color }} />
      <Container style={{ color: containerColor }} />
    </div>
  );
}

export default App;
