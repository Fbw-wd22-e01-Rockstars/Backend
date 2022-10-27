import identifierModel from "../models/identifierModel.js";

export const createIdentifier = async (req, res) => {
  try {
    const newIdentifier = new identifierModel(req.body);
    await newIdentifier.save();
    res.status(201).json(newIdentifier);
  } catch (error) {
    res.send(error);
  }
};

export const getIdentifier = async (req, res) => {
  try {
    const result = await identifierModel
      .find(req.params.id)
      .populate("user", "-__v -password")
      .select("-__v");
    res.status(200).json(result);
  } catch (error) {
    res.send(error);
  }
};
