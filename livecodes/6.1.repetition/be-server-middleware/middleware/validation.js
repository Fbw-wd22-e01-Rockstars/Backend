export const isAdult = (req, res, next) => {
  const { age } = req.body;

  if (parseInt(age) < 18) {
    const error = new Error("The user is too young!");
    next(error);
  }
  next();
};

//validatekey function
export const validateKeys = (req, res, next) => {
  const { firstName, lastName, age, fbw, email } = req.body;

  if (!firstName || !lastName || !age || !fbw || !email) {
    const error = new Error("Looks like you are missing the required fields");
    next(error);
  }
  next();
};
