function MyComponent1() {
    return (
        <div>
            <h1>Hello Component</h1>
        </div>
    )
}

function MyComponent2() {
    return (
        <>
            {/*p>lorem5^ul>li*3>lorem1*/}
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
                <li>Lorem.</li>
                <li>Labore.</li>
                <li>Quas?</li>
            </ul>
        </>
    );
}

function App() {
  return (
    <div>
      <MyComponent1 />
      {/*
      <div>
        <h1>Hello Component</h1>
      </div>
      */}
      <MyComponent2 />
      {/*
        <p>lorem ipsum alkdjf alkdjf </p>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </ul>
       */}
    </div>
  );
}



export default App;
