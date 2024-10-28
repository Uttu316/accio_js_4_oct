import styles from "./form.module.css";

const FormCard = (props) => {
  const { user } = props;
  const { name, email, password, phone, gender, allow } = user;
  return (
    <div className={styles.card}>
      <table>
        <tr>
          <th>#</th>
          <th>Values</th>
        </tr>
        <tr>
          <td className={styles.key}>Name</td>
          <td className={styles.value}>{name}</td>
        </tr>
        <tr>
          <td className={styles.key}>Email</td>
          <td className={styles.value}>{email}</td>
        </tr>
        <tr>
          <td className={styles.key}>Phone</td>
          <td className={styles.value}>{phone}</td>
        </tr>
        <tr>
          <td className={styles.key}>Gender</td>
          <td className={styles.value}>{gender}</td>
        </tr>
        <tr>
          <td className={styles.key}>Allowed Cookies</td>
          <td className={styles.value}>{allow ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td className={styles.key}>Password</td>
          <td className={styles.value}>{password}</td>
        </tr>
      </table>
    </div>
  );
};

export default FormCard;
