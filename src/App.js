import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function NewlineText(props) {
  const text = props.text;
  return <div className="NewLine">{text}</div>;
}

function App() {
  return (
    <div className="App">
      <header>
        CasiiBot
      </header>
      <div className="ChatBar">
        <InputGroup className="Chatbar">
          <FormControl
            placeholder="Say something to CasiiBot..."
            aria-label="Say something to CasiiBot..."
          />
          <InputGroup.Append>
            <Button>Send</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="ChatLog">
        <p>
          <NewlineText text={'CasiiBot: Hiiiiiiiiiii :3!!\nYou: Hi\nCasiiBot: What do you wanna talk about?'} />
        </p>
      </div>
    </div>
  );
}

export default App;
