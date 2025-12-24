import axios from 'axios';
import ModifyUserOutlet from '../../Outlets/ModifyUserOutlet';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const navigate = useNavigate();

    const PageTitle = "Add New User";

    const buttonText = "Add User";

    const handleSubmit = async (data) => {
        await axios.post("/user-management",data)
        navigate("/dashboard/user-management");
    }
    
    return (
        <>
            <ModifyUserOutlet title={PageTitle} buttonText={buttonText} handleSubmit={(data) => { handleSubmit(data) }} />
        </>
    )
}

export default AddUser