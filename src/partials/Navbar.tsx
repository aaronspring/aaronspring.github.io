import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="mr-2 h-10 w-10"
              src="/assets/images/logo.svg"
              alt="Aaron Spring logo"
            />
          }
          name="Aaron Spring"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/work/">CV</NavMenuItem>
        <NavMenuItem href="/#value">Value</NavMenuItem>
        <NavMenuItem href="/#projects">Projects</NavMenuItem>
        <NavMenuItem href="/#contact">Contact</NavMenuItem>
        <li>
          {/* Wired up by the inline theme script in Base.astro */}
          <button
            id="theme-toggle"
            type="button"
            aria-label="Toggle dark and light mode"
            className="flex items-center hover:text-cyan-400"
          >
            <svg
              className="theme-toggle-moon h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg
              className="theme-toggle-sun h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>
        </li>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
