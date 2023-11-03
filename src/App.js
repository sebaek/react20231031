import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}
function App(props) {
  return (
    <div>
      <MyBox color="teal" bg="gray">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        architecto blanditiis commodi delectus eligendi fuga harum impedit
        maxime, necessitatibus nostrum odit, pariatur praesentium quae quaerat
        quas qui veniam? Dolorem, in.
      </MyBox>
      <MyBox color="blue" bg="pink">
        HELLO WORLD
      </MyBox>
    </div>
  );
}

export default App;
