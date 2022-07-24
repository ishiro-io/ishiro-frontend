export type RouteStackParamList = {
  Onboarding: undefined;
  AskCode: undefined;
  ConfirmCode: { phoneNumber: string };
  CreateProfile: {
    phoneNumber?: string;
    code?: string;
  };
  Home: undefined;
};
