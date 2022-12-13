import styled from "styled-components";
interface DarkMode {
  isDark: Boolean;
}
export const Calcolater = styled.div`
  background-color: ${({ isDark }: DarkMode) => (isDark ? "#1a1a1a" : "#fff")};
  color: ${({ isDark }: DarkMode) => (isDark ? " #fff" : "#1a1a1a")};
  width: auto;
  border-radius: 10px;
  margin: auto;
  box-shadow: -8px 3px 12px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: all 0.2s;
  .buttons-mode-container {
    margin: 20px auto 10px;
    background-color: ${({ isDark }: DarkMode) =>
      isDark ? "#272626" : "#F9F9F9"};
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80px;
    padding: 5px 0;
    border-radius: 20px;
    .button-mode {
      background-color: transparent;
      color: ${({ isDark }: DarkMode) => (isDark ? "#fff" : "#1a1a1a")};
      padding: 0;
      border: none;
      opacity: 0.5;
      transition: all 0.2s;
      &.active {
        opacity: 1;
      }
      &:hover {
        border: none;
        opacity: 1;
      }
    }
  }
  .result {
    position: relative;
    padding: 45px 20px;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
    .small {
      color: #ffffff33;
      font-size: 15px;
      display: block;
      margin-bottom: 10px;
    }
  }
  .calc-container-buttons {
    padding: 20px;
    background-color: ${({ isDark }: DarkMode) =>
      isDark ? "#272626" : "#F9F9F9"};
    border-radius: 20px 20px 0 0;
    transition: all 0.2s;
    .calc-buttons {
      display: flex;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      .calc-button {
        background-color: ${({ isDark }: DarkMode) =>
          isDark ? "#272626" : "#F9F9F9"};
        color: ${({ isDark }: DarkMode) => (isDark ? "#F9F9F9" : "#272626")};
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        box-shadow: -8px 3px 12px 0px rgba(0, 0, 0, 0.15);
        font-weight: bolder;
        font-size: 1.2rem;
        transition: all 0.2s;
        &:not(:last-child) {
          margin-right: 10px;
        }
        &:hover {
          border-color: ${({ isDark }: DarkMode) =>
            isDark ? "#F9F9F9" : "#272626"};
        }
        &.main-buttons {
          color: #c16f74 !important;
          &:hover {
            border-color: #c16f74 !important;
          }
        }
        &.second-buttons {
          color: #32c4ab !important;
          &:hover {
            border-color: #32c4ab !important;
          }
        }
      }
    }
  }
`;
