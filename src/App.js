import React, { useState } from 'react';
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const placeholder =
    '# H1\n ## H2\n ### H3\n**bold text**\n\n  *italicized text*\n```\n{\n"firstName": "John",\n"lastName": "Smith",\n"age": 25\n}\n```  \n> Dorothy followed her through many of the beautiful rooms in her castle.\n 1. First item\n 2. Second item\n 3. Third item\n\n - First item\n - Second item\n - Third item\n\n`code`\n***\n[yahoo.com](http://www.yahoo.com)\n\n![alt text]\n\n![Image](/assets/images/logo.png)';

  const [input, setInput] = useState(placeholder);

  const handleInput = e => {
    setInput(e.target.value);
  };

  return (
    <Container className="container-md">
      <Row>
        <Col>
          <h1 className="display-5">Editor</h1>
          <Editor placeholder={placeholder} handleInput={handleInput} />
        </Col>
        <Col>
          <h1 className="display-5">Markdown Previewer</h1>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <Previewer input={input} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
