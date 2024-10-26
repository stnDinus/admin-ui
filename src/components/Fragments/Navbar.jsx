import { Link } from "react-router-dom";

export default function Navbar() {
  return <>
    <nav className="bg-defaultBlack text-special-bg2 w-36 h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <Link to="/">
          <div className="flex justify-center mb-10">Logo</div>
          <div className="flex bg-primary text-white px-4 py-3 rounded-md">
            <div className="text-white mx-auto">A</div>
            <div className="ms-3 hidden">Overview</div>
          </div>
        </Link>
        <Link to="/balance">
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <div className="mx-auto">B</div>
            <div className="ms-3 hidden">Balances</div>
          </div>
        </Link>
        <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
          <div className="mx-auto">C</div>
          <div className="ms-3 hidden">MENU</div>
        </div>
      </div>
      <div className="sticky bottom-12">
        <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
          <div className="mx-auto">D</div>
          <div className="ms-3 hidden">Logout</div>
        </div>
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto">foto</div>
          <div className="hidden">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden">icon</div>
        </div>
      </div>
    </nav>
  </>
}
