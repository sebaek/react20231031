function MyComp({ text, address, children }) {
  return (
    <>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p>
    </>
  );
}

function App(props) {
  return (
    <div>
      <MyComp text="hello" address="seoul">
        some contents, 다른 컴포넌트가 있을 수도 있음.
      </MyComp>
    </div>
  );
}

export default App;
