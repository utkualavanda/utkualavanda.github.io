import { Tooltip } from '@mui/material';

export const Footer = () => (
  <div className="page-footer">
    <ul>
      <Tooltip title="Linkedin" arrow placement="top-end">
        <li>
          <a
            href="https://www.linkedin.com/in/utkualavanda/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="images/linkedin.png" alt="linkedin" />
          </a>
        </li>
      </Tooltip>
      <Tooltip title="Github" arrow placement="top-end">
        <li>
          <a
            href="https://github.com/utkualavanda"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/github.png"
              alt="github"
              className="page-footer__github-logo"
            />
          </a>
        </li>
      </Tooltip>
      <Tooltip title="Mail" arrow placement="top-end">
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
      </Tooltip>
    </ul>
  </div>
);
