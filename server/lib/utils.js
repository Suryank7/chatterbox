import jwt from "jsonwebtoken"

export const generateToken = (userId) => {
    const token = jwt.sign({ userID }, process.env.JWT_SECRET);
    return token;
}