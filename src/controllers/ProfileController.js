import connection from "../database";

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    if (!ong_id) return res.status(401).json({ error: "No id provided." });

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.status(200).json(incidents);
  }
}

export default new ProfileController();
