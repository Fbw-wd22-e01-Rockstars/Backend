export const isAdult = (req, res, next) => {
  const { age } = req.body;

  if (parseInt(age) < 18) {
    const error = new Error("The user is too young!");
    next(error);
  }
  next();
};

//validatekey function
