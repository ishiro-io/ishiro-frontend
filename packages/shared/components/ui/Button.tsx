import { DripsyCustomTheme, P, Pressable, StyledProps } from "dripsy";
import { PressableProps } from "react-native";

export const Button = ({
  children,
  icon,
  ...props
}: ButtonProps & PressableProps) => {
  return (
    <Pressable {...props}>
      {icon}
      <P
        numberOfLines={1}
        sx={{
          fontSize: 13,
          fontWeight: 600,
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: 1,
          lineHeight: 10,
          overflow: "visible",
          paddingY: "4"
        }}
      >
        {children}
      </P>
    </Pressable>
  );
};

interface ButtonProps extends StyledProps<Extract<DripsyCustomTheme, string>> {
  icon?: JSX.Element;
  children?: React.ReactNode;
}
