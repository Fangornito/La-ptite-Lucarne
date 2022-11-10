import PropTypes from "prop-types";

export default function Home({ goTo }) {
  return (
    <main className="lineaireSimple">
      <button className="homeButton" type="button" onClick={() => goTo("test")}>
        <span />
        <span />
        <span />
        <span />
        Commencer
      </button>
    </main>
  );
}

Home.propTypes = {
  goTo: PropTypes.func.isRequired,
};
