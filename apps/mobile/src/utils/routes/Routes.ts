export type StackParamList = {
  Onboarding: undefined;
  AskCode: undefined;
  ConfirmCode: { phoneNumber: string };
  CreateProfile: {
    phoneNumber?: string;
    code?: string;
  };
  Content: undefined;
  Profile: undefined;
};

export type TabsParamList = {
  Home: undefined;
  Search: undefined;
  Categories: undefined;
};
