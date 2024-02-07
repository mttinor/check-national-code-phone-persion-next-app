import { Text, Button } from "@/share/styles";
import React, { useEffect, useState } from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { Form, Modal } from "react-bootstrap";
import BaseModal from "./../components/baseModal";
import { useRouter } from "next/navigation";
import { checkNationalId } from "@/share/utils";

interface FormValues {
  phoneNumber: string;
  nationalId: string;
}
interface FormAddress {
  name: string;
  address: string;
}
interface FormAddressChecked {
  name: string;
  id: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [itemsAddress, setItemsAddress] = useState<FormAddress[]>([]);
  const [address, setAddress] = useState<FormAddressChecked>({
    name: "",
    id: "",
  });

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("این قسمت نمی تواند خالی باشد")
      .matches(
        new RegExp("^[0]?[9][0,1,2,3,4,0,9][0-9]{8,8}$"),
        "فرمت شماره همراه وارد شده صحیح نیست"
      ),
    nationalId: Yup.string()
      .required("این قسمت نمی تواند خالی باشد")
      .test(
        "test-natinal-id",
        "فرمت کد ملی وارد شده صحیح نیست",
        checkNationalId
      ),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      setSubmitting(true);
      // Perform form submission
      let payload = {
        ...values,
        addressId: address?.id,
      };
      router.push("/success");
      // Set submitting to false after successful submission
      setSubmitting(false);
    } catch (error) {
      // Handle form submission error
      console.error(error);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      nationalId: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setAddress({
      name: "",
      id: "",
    });
    setShow(false);
  };
  const handleShow = () => {
    fetchAddress();
    setShow(true);
  };
  const handleModalSubmit = () => {
    setShow(false);
  };
  const fetchAddress = async () => {
    const response = await fetch("http://localhost:3000/api/getAddress");
    const address = await response.json();
    setItemsAddress(address);
  };

  return (
    <div className="py-4 px-2">
      <BaseModal
        title="انتخاب آدرس"
        show={show}
        handleClose={handleClose}
        modalSubmit={handleModalSubmit}
      >
        <div className="p-4">
          {itemsAddress.map((x, i) => {
            return (
              <div className="mb-4" key={i}>
                <Form.Check
                  reverse
                  name="address"
                  dir="rtl"
                  key={i}
                  type="radio"
                  label={x.name}
                  id={`disabled-default-radio`}
                  value={x.name}
                  onChange={(e) =>
                    setAddress({
                      id: `${i + 1}`,
                      name: e.target.value,
                    })
                  }
                />

                <div className="mx-4">{x.address}</div>
              </div>
            );
          })}
        </div>
      </BaseModal>
      <Text fontSize="15px">لطفا اطلاعات شخصی مالک خودرو را وارد کنید : </Text>
      <hr />
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="nationalId"
            className={` ${
              formik.touched.nationalId && formik.errors.nationalId
                ? "border-danger"
                : "border-gray"
            } p-2`}
            type="text"
            placeholder="کد ملی"
            value={formik.values.nationalId}
            onChange={formik.handleChange}
          />
          {formik.touched.nationalId && formik.errors.nationalId && (
            <Form.Text className=" error">{formik.errors.nationalId}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="phoneNumber"
            className={` ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "border-danger"
                : "border-gray"
            } p-2`}
            type="text"
            placeholder="شماره همراه"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <Form.Text className=" error ">
              {formik.errors.phoneNumber}
            </Form.Text>
          )}
        </Form.Group>
        <div className="mt-4">
          <Text fontFamily="YekanBold" fontSize="15px">
            آدرس جهت درج روی بیمه نامه
          </Text>
          <hr />

          {address?.id ? (
            address?.name
          ) : (
            <Text fontSize="15px">
              لطفا آدرسی که می خواهد روی بیمه نامه درج شود را وارد کنید
            </Text>
          )}
          <Button
            type="button"
            className="w-100 rounded-0 mt-4"
            onClick={handleShow}
          >
            انتخاب از آدرس‌های من
          </Button>
        </div>
        <div className="btnNext float-start mt-3">
          <Button
            backgroundColor="#000000"
            color="white"
            type="submit"
            className="rounded-0 mt-3"
          >
            تایید و ادامه
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Home;
