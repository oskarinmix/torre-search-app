import Axios from "axios";

export default function handler(req, res) {
  const {
    query: { id },
  } = req;
  Axios.get(`https://torre.co/api/opportunities/${id}`)
    .then((resp) => res.status(200).json(resp.data))
    .catch((e) =>
      res.status(400).json({
        message: "Error Fetching job " + id,
        error: e,
        ok: false,
      })
    );
}
