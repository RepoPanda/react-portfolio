function Header({ children }) {
	return (
    <header id="header">
	  <h1>Philip J. Mejia</h1>
      {/* <svg
        version="1.1"
        width="200"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="200" height="100" fill="#08c17d" />
        <text
          fontFamily="Permanent Marker"
          x="100"
          y="34"
          fontSize="26"
          textAnchor="middle"
          fill="#fffdd0"
        >
          Philip J. Mejia
        </text>
      </svg> */}
      {children}
    </header>
  );
}

export default Header;