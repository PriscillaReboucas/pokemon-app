import { Link } from "react-router-dom";
import './Start.css';

const Start = () => {
  return (
    <section className="start--container">
      <h1 className="start__title">FIND YOUR POKÉMON</h1>
      <h2 className="start__subtitle">Here you can search for your favorite pokémon</h2>
      <Link to='/pokemon' className="btn start__btn">
        <div class="center-on-page">
          <div class="pokeball">
            <div class="pokeball__button"></div>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default Start;