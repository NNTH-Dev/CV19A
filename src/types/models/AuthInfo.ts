type AuthInfo = {
  fireBaseToken: string | null;
  role: string | null;
  userCode: string | null;
  refreshToken: string | null;
  attributes: Attributes | null;
  username: string | null;
  value: string | null;
  uid: string | null;
};

type Attributes = {
  sellerCode: string | null;
  vendorCode: string | null;
};

export default AuthInfo;
