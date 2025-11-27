import ModifyUserOutlet from '../../Outlets/ModifyUserOutlet'
import { Navigate, useLocation } from 'react-router-dom';

const EditUser = () => {
  
  const { state } = useLocation();

  const PageTitle = "Update User";

  const buttonText = "Update User";

  const handleSubmit = (data) => {
    console.log(data);
  }

  if (!state) {
    return (
      <>
      <Navigate to={'/dashboard'} />
      </>
    );
  }

  return (
    <ModifyUserOutlet {...state.userData} title={PageTitle} buttonText={buttonText} handleSubmit={handleSubmit} />
  )
}

export default EditUser