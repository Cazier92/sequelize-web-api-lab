
const { Paint } = require("../models")

const create = async (req, res) => {
  try {
    const paint = await Paint.create(req.body)
    res.status(200).json(paint)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const paints = await Paint.findAll()
    res.status(200).json(paints)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const paint = await Paint.update(
      req.body,
      {where: {id: req.params.id}, returning: true}
    )
    res.status(200).json(paint)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  update,
}