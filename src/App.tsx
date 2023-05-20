import './App.css';
 
function App() {
  let a=10
  let b=20
  return (
    <>
      <h1>learn react</h1>
      <ul>
        <li>orange</li>
        <li>banana</li>
        <li>apple</li>
      </ul>
      <h1 data-testid="sum">{a+b}</h1>
    </>
  );
}

export default App;
