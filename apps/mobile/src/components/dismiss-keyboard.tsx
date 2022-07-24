import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const DismissKeyboard: React.FC<DismissKeyboardProps> = ({
  children
}: DismissKeyboardProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

interface DismissKeyboardProps {
  children?: React.ReactNode;
}
