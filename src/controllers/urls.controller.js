import { getRealUrl } from "../models/urls.model.js"

export const redirectRealUrl = async (req, res) => {
  try {
    const code = req.params.code

    const { url_real } = await getRealUrl(code)

    res.redirect(url_real)
  } catch (error) {
    if (error.message === "No existe la URL") {
      return res.status(404).json({
        message: error.message
      })
    }
    return res.status(500).json({
      message: 'Error al buscar url',
      code: error.code
    })
  }
}