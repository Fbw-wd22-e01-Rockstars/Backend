import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.header("token");

  if (!token) {
    return res.status(401).json({ msg: "Auth error!" });
  }

  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(500).send({ msg: "Invalid token!" });
  }
};
