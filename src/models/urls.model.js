import { pool } from "../db.js"

/**
 * Find in DB the real URL for a unique url code
 * 
 * @param {*} urlCode 
 */
export const getRealUrl = async (urlCode) => {
  try {
    const [rows] = await pool.query("select url_real from t_urls where url_code = ?", [urlCode])

    if (rows.length <= 0) throw Error('No existe la URL')

    return rows[0]

  } catch (error) {
    throw error
  }
}

/**
 * 
 */
export const postUrl = async (urlCode, realUrl) => {
  try {
    const [rows] = await pool.query("insert into t_urls (url_code, url_real) values (?, ?)", [urlCode, realUrl])


  } catch (error) {
    throw error
  }
}