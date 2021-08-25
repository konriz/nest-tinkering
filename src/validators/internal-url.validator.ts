import { registerDecorator } from "class-validator";

export function IsInternalUrl() {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isInternalUrl",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [propertyName],
      validator: {validate},
      options: {message: "Url has to lead to internal service"}
    })
  }
}

function validate(value: any) {
  return typeof value === "string" && value.startsWith("http://internal.service.com/");
}
