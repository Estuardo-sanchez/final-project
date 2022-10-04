import { useRef, useState } from 'react';
import axios from 'axios';
import { Alert, Button, Card, Form } from 'react-bootstrap';

export const FormSignup = () => {
  const barbershopName = useRef();
  const barbershopStreet = useRef();
  const barbershopCity = useRef();
  const barbershopProvince = useRef();
  const barbershopPostCode = useRef();
  const barbershopOpenHours = useRef();
  const barbershopCoverPhoto = useRef();
  const barbershopLattitude = useRef();
  const barbershopLongitude = useRef();
  const formRef = useRef();

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState('');

  function handleReset() {
    formRef.current.reset();
  }

  async function handleSubmit (e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      const data = {
        name: barbershopName.current.value,
        street: barbershopStreet.current.value,
        city: barbershopCity.current.value,
        province: barbershopProvince.current.value,
        post_code: barbershopPostCode.current.value,
        open_hours: barbershopOpenHours.current.value,
        cover_photo_url: barbershopCoverPhoto.current.value,
        lattitude: barbershopLattitude.current.value,
        longitude: barbershopLongitude.current.value
        
      }
      
      const URL_BARBERSHOPS_API = 'http://localhost:8000/api/barbershops';
      const barbershopCreated = await axios.post(URL_BARBERSHOPS_API, data)
      console.log(barbershopCreated)
      
      formRef.current.reset();

      setLoading(false);
      setMessage('Shop Posted!');
    } catch (e) {
      setError('Error making post: ' + e.stack)
      setLoading(false)
    }
  }

  return (
    <div style={{ marginBottom: '10em' }}>
    <Card className="w-75 mx-auto mt-5">
      <Card.Body>
        <h1 className="display-4 text-center my-3">Post your barbershop!</h1>
        { error && <Alert variant="danger">{ error }</Alert> }
        { message && <Alert variant="success">{ message }</Alert> }
        <Form onSubmit={ handleSubmit } ref={ formRef }>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Barbershop name</Form.Label>
            <Form.Control ref={ barbershopName } type="text" placeholder="Barbershop name" autoComplete="off" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Address</Form.Label>
            <Form.Control ref={ barbershopStreet } as="textarea" rows={4} placeholder="Street address" autoComplete="off" required />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control ref={ barbershopCity } type="text" placeholder="City" autoComplete="off" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control ref={ barbershopProvince } type="text" placeholder="Province" autoComplete="off" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control ref={ barbershopPostCode } type="text" placeholder="Postal code" autoComplete="off" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control ref={ barbershopOpenHours } type="text" placeholder="Hours of operation" autoComplete="off" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control ref={ barbershopCoverPhoto } type="text" placeholder="Profile picture url" autoComplete="off" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control ref={ barbershopLattitude } type="text" placeholder="Lattitude" autoComplete="off" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control ref={ barbershopLongitude } type="text" placeholder="Longitude" autoComplete="off" required />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit" disabled={ loading }>
            Publish
          </Button>
          <Button onClick={handleReset } className="w-100 my-2" variant="secondary">
            Reset
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </div>
  )
}

export default FormSignup;
