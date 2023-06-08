import { Button, Form} from "react-bootstrap";
import { clearFormInput, clearFormPassword } from "../js/form";
import { notAuthPost } from "../js/not_auth";

export default function Login(props) {

  async function loginSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const login = {username:clearFormInput(loginForm, 0), password:clearFormPassword(loginForm, 1)};
    const response = JSON.parse(await notAuthPost("login", login));
    console.log(login);
    if(response){
      localStorage.setItem("token",response);
      location.reload();
    }
    else
      alert("Username o password errate!")
  }

  return (
        <Form name="loginForm" onSubmit={loginSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Username" type="text" name="username"></Form.Control>
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Password" type="password" name="password"></Form.Control>
          </Form.Group>
          <Form.Group className="mt-3">
            <Button type="submit" className="bg-nero border-rossoSangue hover-bg-borgogna w-100">Entra</Button>
          </Form.Group>
        </Form>
  );
}
