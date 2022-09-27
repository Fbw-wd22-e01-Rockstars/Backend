export const getToys = (req, res) => {
  res.json([
    { msg: "Hello frontend! This is GET request!" },
    { msg: "Hello frontend! This is GET request!" },
    { msg: "Hello frontend! This is GET request!" },
  ]);
};

export const createToy = (req, res) => {
  res.send("Post request");
};
