import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { HiUser, HiPhone } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.box}>
      <div>
        <p className={css.text}>
          <HiUser className={css.icon} />
          {name}
        </p>
        <p>
          <HiPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button type="button" onClick={handleDeleteContact}>
        <RiDeleteBinLine />
      </button>
    </div>
  );
}
