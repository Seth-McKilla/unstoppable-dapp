import UAuth from "@uauth/js";

declare const process: {
  env: {
    NEXT_PUBLIC_UAUTH_CLIENT_ID: string;
    NEXT_PUBLIC_UAUTH_CLIENT_SECRET: string;
    NEXT_PUBLIC_UAUTH_REDIRECT_URI: string;
    NEXT_PUBLIC_UAUTH_LOGOUT_REDIRECT_URI: string;
  };
};

let uauth;

if (typeof window !== "undefined") {
  uauth = new UAuth({
    clientID: process.env.NEXT_PUBLIC_UAUTH_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_UAUTH_CLIENT_SECRET,
    scope: "openid email wallet example",
    redirectUri: process.env.NEXT_PUBLIC_UAUTH_REDIRECT_URI,
    postLogoutRedirectUri: process.env.NEXT_PUBLIC_UAUTH_LOGOUT_REDIRECT_URI,
  });
}

export default uauth;
