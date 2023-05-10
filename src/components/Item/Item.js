import { NavLink, Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

const Item = ({ id, name, img, price, stock }) => {
  return (

    <Card style={{ width: '78rem' }}>
      <Card.Title>
        <h2>{name}</h2>
      </Card.Title>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>
          <p>Precio: {price}</p>
          <p>Stock: {stock}</p>

        </Card.Text>
        <Link to={`/item/${id}`} className='Option'>Ver detalle </Link>

      </Card.Body>

    </Card>
  );
}

export default Item
