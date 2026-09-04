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
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
