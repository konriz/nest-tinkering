import { NotFoundException } from "@nestjs/common";

export function Deprecated() {
  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(`Method ${target.constructor.name}.${propertyKey} marked as deprecated`);
    descriptor.value = () => Promise.reject(new NotFoundException("Method deprecated"));
    return descriptor;
  }
}
