import { getRealUrl, postUrl } from "../models/urls.model.js"
import { codeGenerator } from "../utils/codeGenerator.js"
import { config } from "dotenv"

config()

/**
 * Receive by req the unique code to get their real url. Redirect to this one
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns res.redirect or an http error code 
 */
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

export const saveUrl = async (req, res) => {
  try {

    const { url } = req.body

    // gets an unique code for the url
    const uniqueCode = codeGenerator()

    // relate the real url and his code in database
    postUrl(uniqueCode, url)

    // define the short url
    const shortUrl = `${process.env.SHORT_DOMAIN_URL}/${uniqueCode}`

    res.json({
      shortUrl
    })

  } catch (error) {
    return res.status(500).json({
      message: 'Error al buscar url',
      code: error.code
    })
  }
}