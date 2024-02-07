import { Button, Text } from "@/share/styles";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();
  return (
    <>
      <Text
        className="text-end mt-4 px-3"
        fontFamily="YekanBold"
        color="green"
        fontSize="25px"
      >
        اطلاعات شما با موفقیت ثبت شد
      </Text>
      <div className="btnNext float-start mt-3">
        <Button
          backgroundColor="#000000"
          color="white"
          type="submit"
          className="rounded-0 mt-3"
          onClick={() => router.push("/")}
        >
          بازگشت
        </Button>
      </div>
    </>
  );
}
