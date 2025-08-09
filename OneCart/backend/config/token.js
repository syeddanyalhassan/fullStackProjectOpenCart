import jwt from 'jsonwebtoken';

export const gentoken = async (userId) => {
    try {
        // Correct option name is expiresIn, not expiredIn
        let token = await jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return token

    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Token generation failed");
    }
};