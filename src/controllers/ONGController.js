import crypto from "crypto";

import connection from "../database";

class OngController {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.status(200).json(ongs);
  }
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.status(200).json({ id });
  }
}

export default new OngController();
