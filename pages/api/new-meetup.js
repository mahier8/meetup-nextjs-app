// /api/new-meetup
// POST /api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // object destructering for the expected data from
    // the new meetup form
    const { title, image, address, desription } = data;
  }
}

export default handler;
