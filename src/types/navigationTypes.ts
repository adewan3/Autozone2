export type RootStackParamList = {
  Home: undefined;
  ModalNavigator: undefined;
};

export type ModalStackParamList = {
  ChooseYear: undefined;
  ChooseMake: { year: string };
  ChooseModel: { year: string; make: string };
  ChooseEngine: { year: string; make: string; model: string };
};