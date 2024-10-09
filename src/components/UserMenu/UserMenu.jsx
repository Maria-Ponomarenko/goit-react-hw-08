import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors.js";
import { logout } from "../../redux/auth/operations.js";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        logOut
      </button>
    </div>
  );
}
