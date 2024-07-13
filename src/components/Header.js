import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const isBrowsePage = location.pathname === "/browse";

  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 " src={LOGO} alt="logo" />
      <div className="flex">
        {isBrowsePage && (
          <button
            onClick={handleSignOut}
            className="bg-red-500 border border-white rounded-lg text-white p-2 pt-1 m-2"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
