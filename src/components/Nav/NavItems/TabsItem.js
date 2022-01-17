import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { VALUE_TAB } from "../../../constants/const";
import { PATH } from "../../../constants/paths";
import { splitPath } from "../../../utils/util";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const theme = createTheme({
    palette: {
        secondary: {
            // This is green.A700 as hex.
            main: "#2D2C2C",
        },
    },
});
const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        minWidth: 0,
        [theme.breakpoints.up("sm")]: {
            minWidth: 0,
        },
        fontSize: 18,
        fontWeight: 500,
        marginRight: theme.spacing(1),
        color: "#636464",
        opacity: 0.8,
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:hover": {
            color: "#2D2C2C",
            opacity: 1,
        },
        "&.Mui-selected": {
            color: "#2D2C2C",
            fontWeight: theme.typography.fontWeightMedium,
            opacity: 1,
        },
        "&.Mui-focusVisible": {
            backgroundColor: "#d1eaff",
        },
    })
);
function TabsItem({ value, isCustom }) {
    const navigate = useNavigate();
    const location = useLocation();
    const handleChange = (event, newValue) => {
        let regex = "";
        switch (value) {
            case VALUE_TAB.TAB_PEOPLE:
                regex = PATH.DETAIL_CLASS_PEOPLE_SPLIT;
                break;
            case VALUE_TAB.TAB_STREAM:
                regex = PATH.DETAIL_CLASS_SPLIT;
                break;
            case VALUE_TAB.TAB_GRADE:
                // regex = PATH.GRADE_SPLIT;
                isCustom ? (regex = PATH.GRADE_SPLIT) : (regex = PATH.STUDENT_GRADE_SPLIT);
                break;
            case VALUE_TAB.TAB_LIST_GRADE_REVIEW:
                // regex = PATH.GRADE_SPLIT;
                regex = PATH.LIST_GRADE_REVIEW_SPLIT
                break;
            default:
                break;
        }
        const id = splitPath(location.pathname, regex);
        let pathNew = "";
        switch (newValue) {
            case VALUE_TAB.TAB_PEOPLE:
                pathNew = PATH.DETAIL_CLASS_PEOPLE_SPLIT + id;
                break;
            case VALUE_TAB.TAB_STREAM:
                pathNew = PATH.DETAIL_CLASS_SPLIT + id;
                break;
            case VALUE_TAB.TAB_GRADE:
                // pathNew = PATH.GRADE_SPLIT + id;
                isCustom ? (pathNew = PATH.GRADE_SPLIT + id) : (pathNew = PATH.STUDENT_GRADE_SPLIT + id);
                break;
            case VALUE_TAB.TAB_LIST_GRADE_REVIEW:
                // pathNew = PATH.GRADE_SPLIT + id;
                pathNew = PATH.GRADE_SPLIT + id
                break;
            default:
                break;
        }
        navigate(pathNew);
    };
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%", height: "70%", bgcolor: "#F8F9F9" }}>
                <Tabs
                    textColor="secondary"
                    indicatorColor="secondary"
                    sx={{ mt: 1.7 }}
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    <AntTab label="Stream"></AntTab>
                    <AntTab label="Classwork"></AntTab>
                    <AntTab label="People"></AntTab>
                    <AntTab label="Grades"></AntTab>
                    {isCustom && <AntTab label="List grade reviews"></AntTab>}
                    {/*{isCustom && <AntTab label="Grades"></AntTab>}*/}
                </Tabs>
            </Box>
        </ThemeProvider>
    );
}
export { TabsItem };
