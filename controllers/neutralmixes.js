const { NeutralMix, Paint, NeutralPaintMix } = require("../models")

const create = async (req, res) => {
  try {
    const neutralMix = await NeutralMix.create(req.body)
    res.status(200).json(neutralMix)
  } catch (error) {
    res.status(500).json(error)
  }
}

const associatePaint = async (req, res) => {
  try {
    const neutralMixId = req.params.mixtureId
    const paintToAssociate = req.body.paintId

    const association = await NeutralPaintMix.create({
      neutralMixId: neutralMixId,
      paintId: paintToAssociate
    })
    res.status(200).json(association)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const index = async (req, res) => {
  try {
    const neutralMixes = await NeutralMix.findAll(
      {
        include: [
          {model: Paint, as: 'paints', through: {attributes: []}},
        ]
      }
    )
    res.status(200).json(neutralMixes)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  associatePaint,
  index,
}