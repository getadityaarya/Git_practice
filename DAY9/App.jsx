import Button from "./Button";
import Greeting from "./components/Greeting";
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Message from "./Message";

function App() {
  return (
    <>
      <Header />
      <Message />
      <Button />
      <ListGroup />
      <Greeting name="Aditya" city="Pune" />
    </>
  );
}

export default App;
