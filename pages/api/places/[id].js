import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    console.log("found place", place);

    response.status(200).json(place);
  }

  if (request.method === "PUT") {
    const place = await Place.findByIdAndUpdate(id, request.body);
    console.log(place);
    return response.status(200).json({ status: "Place successfully updated." });
  }

  if (request.method === "DELETE") {
    const place = await Place.findByIdAndDelete(id);
    return response.status(200).json({ status: "Place successfully deleted." });
  }
}
