import ModifyUserOutlet from '../../Outlets/ModifyUserOutlet';

const AddUser = () => {

    const PageTitle = "Add New User";

    const buttonText = "Add User";

    const handleSubmit = (data) => {
        console.log("User added" + data);
    }
    return (
        <>
            <ModifyUserOutlet title={PageTitle} buttonText={buttonText} handleSubmit={(data) => { handleSubmit(data) }} />
        </>
    )
}

export default AddUser