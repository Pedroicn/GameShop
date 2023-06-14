import { Link } from "react-router-dom";
import resetImg from "../../assets/reset.png";
import Card from "../../components/card/Card";
import styles from "./auth.module.scss";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

function Reset() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Success");
        alert("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
        // ..
      });
  };
  return (
    <section className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <div className={styles.img}>
        <img src={resetImg} alt="reset" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>

          <form onSubmit={resetPassword}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
}

export default Reset;
