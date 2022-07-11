export const Footer = () => (
  <div className="page-footer">
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/utkualavanda/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="images/linkedin.png" alt="linkedin" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/utkualavanda"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="images/github.png" alt="github" />
        </a>
      </li>
      <li>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.open('mailto:utkualavanda@gmail.com');
          }}
        >
          <img src="images/e-mail.png" alt="e-mail" />
        </a>
      </li>
    </ul>
  </div>
);
