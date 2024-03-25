import { useState } from "react";
import {
  FaSearch,
  FaShoppingBasket,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const user = { _id: "1", role: "user" };
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-end items-center gap-5 p-4">
      <Link
        onClick={() => setIsOpen(false)}
        className=" decoration-transparent text-xl tracking-[2px] text-zinc-600 hover:text-zinc-800 font-bold"
        to={"/"}
      >
        Home
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        className="decoration-transparent text-xl tracking-[2px] text-zinc-600 hover:text-zinc-800"
        to={"/search"}
      >
        <FaSearch />
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        className="text-xl tracking-[2px] text-zinc-600 hover:text-zinc-800"
        to={"/cart"}
      >
        <FaShoppingBasket />
      </Link>

      {user?._id ? (
        <>
          <button
            className=" text-xl cursor-pointer bg-transparent text-zinc-600 hover:text-zinc-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaUser />
          </button>
          <dialog
            style={{ left: "calc(99% - 120px)" }}
            className={` z-10 border border-stone-300 rounded p-2 w-[120px] absolute top-[10%]`}
            open={isOpen}
          >
            <div className="flex justify-start items-center gap-2 flex-col *:w-full">
              {user.role === "admin" && (
                <Link
                  className="decoration-transparent text-xl cursor-pointer bg-transparent text-zinc-600 hover:text-zinc-800 outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                  to={"/admin/dashboard"}
                >
                  Admin
                </Link>
              )}
              <Link
                className="decoration-transparent text-xl cursor-pointer bg-transparent text-zinc-600 hover:text-zinc-800"
                onClick={() => setIsOpen(!isOpen)}
                to={"/orders"}
              >
                Orders
              </Link>
              <button className="decoration-transparent flex items-center gap-2 text-xl cursor-pointer bg-transparent text-zinc-600 hover:text-zinc-800">
                Logout <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link
          className="text-xl tracking-[2px] text-zinc-600 hover:text-zinc-800"
          to={"/login"}
        >
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
