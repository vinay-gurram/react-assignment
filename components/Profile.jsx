import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
export default Profile;
