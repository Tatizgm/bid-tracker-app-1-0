export default async function handler(req, res) {
  if (req.method === "POST") {
    // dummy bid data
    const fakeData = {
      bids: [
        { project: "Demo Project", client: "Client A", estimator: "You", status: "", amount: 100000, bidDueDate: "2024-01-01" }
      ]
    };
    res.status(200).json(fakeData);
  } else {
    res.status(405).end("Method Not Allowed");
  }
}
