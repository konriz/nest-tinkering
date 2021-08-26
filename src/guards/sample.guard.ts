import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class SampleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

function validateRequest(request: Request): boolean {
  const authHeader = request.headers["authorization"];
  if (!authHeader) {
    return false;
  }
  const authDataEncoded = (authHeader as string).split(" ")[1];
  const authDataDecoded = Buffer.from(authDataEncoded, "base64").toString("utf-8");
  const [username, password] = authDataDecoded.split(":");
  return username === "username" && password === "userpassword";
}
