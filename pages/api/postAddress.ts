// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface SaveOrderRequest {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SaveOrderRequest>
) {
  const { nationalId, phoneNumber, addressId } = req.body;

 
}
