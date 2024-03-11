import { makeUrlShort } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function shorten(req: NextApiRequest, res: NextApiResponse) {
  const { longUrl } = req.body;
  if(!longUrl || longUrl.length <= 0) {
    res.status(400).json({status: 'Error: url not set.'})
    return
  }

  const shortUrl = makeUrlShort(6)
  console.log(shortUrl)
}
