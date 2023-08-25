function DetailsPage({ details }) {
  return (
    <div>
      <h1>Details Page</h1>
      <p>Name: {details.name}</p>
      <p>Message: {details.message}</p>
      <p>Email: {details.email}</p>
    </div>
  );
}
export default DetailsPage;
