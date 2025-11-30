// Navigation types
export type RootStackParamList = {
  MainTabs: undefined;
};

export type TabsParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// User types
export interface User {
  id: string;
  name: string;
  email: string;
}
