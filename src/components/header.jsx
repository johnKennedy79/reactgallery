export default function Header() {
  return (
    <nav className="headercontainer">
      <img
        className="headerimg"
        src="../manT.jpg"
        alt="Bearded Man flexing logo"
      />
      <h1 className="headertitle">Top Man Barbers</h1>
      <a className="navbtn" href="#">
        About Us{" "}
      </a>
      <a className="navbtn" href="#">
        Prices
      </a>
      <a className="navbtn" href="#">
        Booking
      </a>
    </nav>
  );
}
