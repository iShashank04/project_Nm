import { useNavigate } from 'react-router-dom';

function DetailsPage({ details }) {
  const navigate = useNavigate();
  const navigateHome = () => {

    navigate('/');
  };
  return (
    <div>
      <h1>Details Page</h1>
      <p>Name: {details.name}</p>
      <p>Number: {details.number}</p>
      <p>Email: {details.email}</p>
      <p>Organization: {details.org}</p>
      <button onClick={navigateHome}>Return</button>
    </div>
  );
}
export default DetailsPage;
