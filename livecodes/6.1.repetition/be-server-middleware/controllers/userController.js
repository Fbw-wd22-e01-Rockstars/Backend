export const validationResponse = (req, res) => {
  res.json({ msg: "This user is valid!" });
};

//sanitizeresponse
export const sanitizeResponse = (req, res) => {
  res.json(req.body);
};
