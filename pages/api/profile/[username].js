import Axios from "axios";

export default function handler(req, res) {
  const {
    query: { username },
  } = req;
  Axios.get(`https://torre.bio/api/bios/${username}`)
    .then((resp) => res.status(200).json(resp.data))
    .catch((e) =>
      res.status(400).json({
        message: "Error Fetching Profile " + username,
        error: e,
        ok: false,
      })
    );
}
