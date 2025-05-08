import { useNavigate, Outlet } from "react-router-dom";
export const Contact = () => {
  const navigate = useNavigate(); //Navigating to next page after action completed.
  const handleSubmit = () => {
    console.log("-------------------------------");
    return navigate("/");
  };
  return (
    <>
      <div className="component">Contacts</div>
      <Outlet />
      <button onClick={handleSubmit}>Submit Form</button>
    </>
  );
};
