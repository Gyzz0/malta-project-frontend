import { Button, Form, InputGroup } from "react-bootstrap";
import { clearFormInput, clearFormPassword } from "../js/form";
import { useState } from "react";
import IconPopover from "./IconPopover";
import { InfoCircle } from "react-bootstrap-icons";
import { notAuthPost } from "../js/not_auth";
import IsValideAttribute from "./IsValideAttribute";

export default function Signup() {
  const [isValidUsername, setIsValidUsername] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(null);

  const testoEmail="L'Username deve essere più lungo di 3 caratteri e inferiore a 20 caratteri e contenere solamente caratteri alfabetici e spazzi";
  const testoPassword="La Password deve essere più lunga di 5 caratteri e può contenere solamente caratteri alfanumerici";

  async function signupSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const signup = {
      username: clearFormInput(signupForm, 0),
      password: clearFormPassword(signupForm, 1),
    };
    const response = JSON.parse(await notAuthPost("signup", signup));
    console.log(signup);
    if (response) {
      localStorage.setItem("token", response);
      location.reload();
    } else alert("Username o password errate!");
  }

  return (
    <Form name="signupForm" onSubmit={signupSubmit}>
      <Form.Group>
        <Form.Label>
          Username
          <IconPopover
            icon={<InfoCircle />}
            titolo="Info"
            testo={testoEmail}
            placement="right"
          />
        </Form.Label>
        <InputGroup>
          <Form.Control
            placeholder="Username"
            type="text"
            name="username"
            minLength={3}
            max={20}
            required
            onBlur={existUsername}
          />
          <InputGroup.Text>
            <IsValideAttribute
              isValidUsername={isValidUsername}
              testi={["Inserire Username","Username Disponibile","Username non Disponibile"]}
            />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label>Email</Form.Label>
        <InputGroup>
          <Form.Control
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <InputGroup.Text>V</InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label>
          Password
          <IconPopover
            icon={<InfoCircle />}
            titolo="Info"
            testo={testoPassword}
            placement="right"
          />
        </Form.Label>
        <Form.Control
          placeholder="Password"
          type="password"
          name="password"
          minLength={5}
          required
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <InputGroup>
          <InputGroup.Text className="bg-grigioScuro text-biancoSporco border-grigioScuro px-0 m-0">
            Ho letto il Regolamento e accetto di seguire le sue norme
            <Form.Check className="ms-1" required/>
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mt-3">
        <Button
          type="submit"
          className="bg-nero border-rossoSangue hover-bg-borgogna w-100"
        >
          Invia
        </Button>
      </Form.Group>
    </Form>
  );

  async function existUsername(){
    let username=clearFormInput(signupForm, 0);
    if (username != "" && username.length>=3) {
      setIsValidUsername(!JSON.parse(
        await notAuthPost("giocatore/existUsername", {
          username: username,
        })
      ));
    } else {
      setIsValidUsername(null)
    }
  }
}
