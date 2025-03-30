import { Contact } from "../models/contact.model.js";
import { validate } from "email-validator";

const sendContactMessage = async (req, res) => {
    try {
        const { fullName, email, request, message } = req.body;

        if(!fullName || !email || !request || !message){
            return res.status(404).json({
                message: "All fields are required."
            });
        }

        const validEmail = validate(email);
        if (!validEmail) {
            return res.status(404).json({
                message: "Please enter a valid email",
            });
        }

        const requestMessage = new Contact({
            fullName,
            email,
            request, 
            message
        });

        await requestMessage.save();

        return res.status(201).json({
            message: "Request message sent successfully."
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while sending request message."
        });
    }
}

export { sendContactMessage };

