import Paintings from "../models/Paintings.js";

export const getAllPaintings = async (req, res, next) => {
  try {
    const paintings = await Paintings.find();
    if (!paintings.length) {
      /* throw new Error(); */
      throw { message: "Paintings not found" };
    }
    res.json(paintings);
  } catch (error) {
    next(error);
  }
};

export const getPaintingById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const painting = await Paintings.findById(id);
    if (!painting) {
      throw { statusCode: 404, message: "painting not found" };
    }
    res.json(painting);
  } catch (error) {
    next(error);
  }
};

export const addNewPainting = async (req, res, next) => {
  try {
    const { title, artist, year, description, imageUrl } = req.body;
    /* const newPainting = new Paintings({
      title,
      artist,
      year,
      description,
      imageUrl,
    });
    const savedPainting = await newPainting.save(); */

    /* weitere Alternative */

    const newPainting = await Paintings.create({
      title,
      artist,
      year,
      description,
      imageUrl,
    });
    res.status(201).json(newPainting);
  } catch (error) {
    next(error);
  }
};

export const updatePainting = async (req, res, next) => {
  const { id } = req.params;
  const { title, artist, year, description, imageUrl } = req.body;

  try {
    const updatedPainting = await Paintings.findByIdAndUpdate(
      id,
      {
        title,
        artist,
        year,
        description,
        imageUrl,
      },
      { new: true }
    );
    if (!updatedPainting) {
      throw { statusCode: 404, message: "painting not found" };
    }
    res.json(updatedPainting);
  } catch (error) {
    next(error);
  }
};

export const deletePainting = async (req, res, next) => {
  const { id } = req.params; // Die ID aus den Request-Parametern extrahieren

  try {
    const result = await Paintings.findOneAndDelete({ _id: id });
    if (!result) {
      throw { statusCode: 404, message: "Painting not found" };
    }
    res.json({ message: "Painting deleted successfully" });
  } catch (error) {
    next(error);
  }
};
