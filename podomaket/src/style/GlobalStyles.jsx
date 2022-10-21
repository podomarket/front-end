import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        font-family: 'Gowun Dodum', sans-serif !important;
    }
`;

export default GlobalStyles;
