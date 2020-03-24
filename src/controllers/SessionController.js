import connection from "../database";

class SessionController {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong)
      return res
        .status(401)
        .json({ error: "Cannot login whitout a valid id." });

    return res.status(200).json(ong);
  }
}

export default new SessionController();
