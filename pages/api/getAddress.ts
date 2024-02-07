// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  address: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
    {
      name: "شرکت نقش افرین شرق",
      address: "فارس,شیراز,خیابان جمهوری,بالاتر از فلان,پلاک6,,hpn234",
    },
  ]);
}


