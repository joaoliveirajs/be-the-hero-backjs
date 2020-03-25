import connection from "../database";

class IncidentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select("*");

    console.log(count);
    console.log(incidents);
    res.header("X-Total-Count", count["count(*)"]);
    return res.status(200).json(incidents);
  }
  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.status(200).json({ id });
  }

  async remove(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    console.log(id, ong_id);

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (ong_id !== id && !incident)
      return res.status(401).json({ error: "Invalid incident id." });

    await connection("incidents")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
}

export default new IncidentController();
