import { useDispatch } from "react-redux";
import { logOut } from "../../redux/contacts/operations";

const LogOut = () => {
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  useEffect(() => {
    if (!user && !isLoading && !error) {
      navigate("/login");
    }
  }, [user, isLoading, error, navigate]);

  return (
    <div>
      <button onClick={handleLogout} disabled={isLoading}></button>
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && <p>You have been logged out successfully.</p>}
    </div>
  );
};

export default LogOut;
