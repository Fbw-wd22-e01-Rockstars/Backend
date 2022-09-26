export const auth = (req, res, next) => {
  try {
    const userId = req.params.id;

    if (userId === "hammed") {
      req.userId = userId;
      next();
    } else {
      res.send("Auth failed!");
    }
  } catch (error) {
    console.log(error);
  }
};
