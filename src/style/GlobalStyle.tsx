import { createGlobalStyle } from "styled-components";
interface DarkMode {
  isDark: Boolean;
}
export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({ isDark }: DarkMode) =>
          isDark ? "#272626" : "#E8E8E8"};
          transition: all .2s;
    }
`;
