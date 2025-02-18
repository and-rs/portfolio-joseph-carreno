export default function Footer() {
  const currentYear = new Date().getFullYear()
  const artistName = "Joseph Carreno"
  const developerName = "Andres Bautista"

  return (
    <div className="flex flex-col justify-between items-center p-8 mx-auto w-full max-w-screen-lg sm:flex-row text-foreground/60">
      <p>
        © {currentYear} {artistName}. All rights reserved.
      </p>
      <p className="mt-2 sm:mt-0">
        Web design by&nbsp;
        <a
          href="https://andres.contact"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:underline underline-offset-2 hover:border-foreground hover:text-foreground"
        >
          {developerName}
        </a>
      </p>
    </div>
  )
}
