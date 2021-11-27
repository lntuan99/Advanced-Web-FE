import React, { Fragment, useState} from "react";
import "./Nav2.css";
import Divider from "@mui/material/Divider";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { AvatarIcon } from "./NavItems/Avatar";
import { MenuDrawer } from "./NavItems/Menu";
import { TabsItem } from "./NavItems/TabsItem";
import { ClassSetting } from "../ClassSetting/ClassSetting";
import Box from "@mui/material/Box";

function Nav2({ data, valueTab }) {
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  //useEffect(() => {
  //    console.log(data)
  //}, [data])
  return (
    <Fragment>
      <header>
        <div className="header2">
          <div className="part1">
            <div className="logo2">
              <span>
                <MenuDrawer />
              </span>
              <div className="blockName2">
                {data.name}
                {/* <span className="code">{data.code}</span> */}
              </div>
            </div>
            <div className="tabs">
              <TabsItem value={valueTab} isCustom={data.isCustom} />
            </div>
          </div>

          <nav>
            <ul>
              <li>
                <Box sx={{py:"30%",height:"80%",alignItems:"center",mt:"30%"}}>
                  {" "}
                  <div onClick={() => setIsOpenSetting(true)}>
                    <SettingsOutlinedIcon color="action" sx={{ fontSize: 25 }}/>
                  </div>
                </Box>
              </li>
              <li>
                <AvatarIcon />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Divider />
      <div className="divide"></div>
      {isOpenSetting ? (
        <ClassSetting onclose={() => setIsOpenSetting(false)} data={data} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export { Nav2 };
