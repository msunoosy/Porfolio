import styles from "./ContactusStyles.module.css"
import { useState } from "react";

function ContuctUs() {
    
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", import.meta.env.VITE_MAIL_SECRET_KEY);
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <section id="contact" className={styles.container} >
        <h1 className="sectionTitle">Contact</h1>
        <form action="" onSubmit={onSubmit}>
            <div className="formGroup">
                <label htmlFor="name" hidden>Name</label>
                <input type="text" name='name' id='name' placeholder="name" required>
                </input> 
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>Email</label>
                <input type="text" name='email' id='email' placeholder="email" required>
                </input> 
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>Message</label>
                <textarea type="text" name='message' id='message' placeholder="message" required>
                </textarea> 
            </div>
            <input className="hover btn" type="submit" value="Submit"></input>
        </form>
    </section>
  )
}

export default ContuctUs