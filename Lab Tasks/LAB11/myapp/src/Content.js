import React from "react";
const Contact = () => {
    const {formStatus, setFormStatus} = React.useState('Send')
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Sending...')
        const {name, email, message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };
        let response = fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setFormStatus('Send')
        let result = response.json();
        alert(result.status);
    };
    return (
        <div>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                </div>
                <button type="submit">{formStatus}</button>
            </form>
        </div>
    );
};
export default Contact;