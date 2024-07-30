import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <div className={css.div}>
      <p className={css.p}>
        <FaUser />

        {contact.name}
      </p>
      <p className={css.p}>
        <FaPhoneAlt />
        {contact.number}
      </p>
      <button className={css.btn} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
