import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      {country.country} {country.emoji}
    </li>
  );
}

export default CountryItem;
