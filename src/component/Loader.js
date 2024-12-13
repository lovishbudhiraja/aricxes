import React from "react";

function Loader() {
  return (
    <button
      type="button"
      className="flex gap-2 p-3 rounded-lg absolute inset-[50%] w-40 h-16 items-center justify-center"
      disabled
    >
      <img
        className="animate-spin w-6"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJUlEQVR4nO3aS6hWVRTA8V2WlT0wNRWskCiyIh9ZBkIhFEUNwgjSUrGgUTlq1CQolBRKE9Ie0KiaFlj5GBQFQU96kFBphYGYDiQqkUrLX2y+feO07znf7bv3fI9j9z89e73OOnvtvdc+IYxzkoLzcAseww58gf04imP4CXvTs41YiilhEMBpuANv4E+dE2V2YSUm9iuAB3FAfURdD+OMXgVxE3brHt/itm5n4SmcaONEDHArVmA+LsSkJHs+5uKupOfzNnpOJD1n1R3EDLxTYfRnPIN5o9A7B0/ilwrdH2J6nUHsqZioz2NaDTYmY1Oqbjnf4+KxGpiKLyuUXzvWAErszcdXJfZi2Z45WqWn4/0SpTu7Wf9xNl4vsfvBqCoanihR9iomdCWCf9uegJdK7D/bqaIl+CtTsquXi5ZWpdtWUs1u7uRtfJMp2Be3IF33vnzb83XJ/Bz5hWJ1JhgzsyT0Ca0CkFezNf9lgn+XCW3tmdcVYHPm04/R13YCyzKB3+PqHPoMpuHXzLe72wnsGLRstMnKzlBFOjMUuToMCLgy8+2PygKEdwsD3w4DhuGr/tKqgdPTJm59bZu1GsHTWSDrQhPBvVkg20MT0VpTiuwOTUTr0y9yuGrXuTnNkcvCAIJTUmdmiM/KBm0vDHgrDCi4AR/hPSwoG3AoS9sFoYkYXqOHR9sE8GYWyPLQRPDoyRLImfgkBbGtLy3MOklnkq6fy8f536J1Klseu4ChqWjtaX5LEz8ulNeEJoKHslIce7/nhqaB60quD14LTQTPGc4VPbJ9arpnjPePn2L2WBfIjwtBxDlzTq0eV9tek73AF+uoXJtSJ3xZbZ6ObPflLJAXumksZmxhvFrrgu7bcbzQ672obhtDhqaky5fIkXSy7NgYZmFt/HRwSfbsKtxZ+z1iZuS+kkIQm3uzOtAxGz8U5GNLtPbsjuTEjcpZVRgzEVtSxqKTj2c67i+Rv7SngSRHHsh+GIgtzMsLz28tuZ7459SJxUlmiFdi2e15IIW3fk/s+GFR9ix+3zn5PLgeG2Im4w1VGFRi2UyL2kE80m9/xgk95G+MgjYEJSJgtAAAAABJRU5ErkJggg=="
        alt="loading"
      />
      Loading...
    </button>
  );
}

export default Loader;
