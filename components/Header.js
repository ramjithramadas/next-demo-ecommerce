import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import headerStyles from "../styles/Header/Header.module.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "@material-ui/core";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [val, setVal] = useState(false);
  // console.log(val);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setVal(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setVal(false);
    router.push("/");
  };

  return (
    <div className={headerStyles.root}>
      <div position="static" className={headerStyles.appbar}>
        <Toolbar className={headerStyles.items}>
          <Link href="/">
            <Typography className={headerStyles.title}>
              <span className={headerStyles.span}>R</span>evyrie
            </Typography>
            <p className={headerStyles.labels}>ONLINE STORE</p>
          </Link>
          {val ? (
            <Link href="/">
              <Button color="inherit" onClick={handleLogout}>
                <AccountCircleIcon />
                log Out
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button color="inherit">
                <AccountCircleIcon />
                log In
              </Button>
            </Link>
          )}
        </Toolbar>
      </div>
    </div>
  );
};
export default Header;
