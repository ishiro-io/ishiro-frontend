import { isMobilePhone } from "class-validator";
import * as yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";

const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

yup.addMethod<yup.StringSchema>(yup.string, "phoneNumber", () => {
  return yup
    .string()
    .required("Votre numéro de téléphone est requis.")
    .test(
      "phone",
      "Votre numéro de téléphone est incorrect. Merci de vérifier son format.",
      (value: string) => isMobilePhone(value, "fr-FR")
    );
});

declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    phoneNumber(): StringSchema<TType, TContext>;
  }
}

export default yup;
