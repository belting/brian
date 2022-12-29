import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <span className={styles.copyright}>&copy; 2022 Brian Elting</span>
          <a
            className={styles.source}
            href="https://github.com/belting/brian"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
