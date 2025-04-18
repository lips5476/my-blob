import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass =
    'flex items-center w-[100vw] bg-white dark:bg-gray-950 justify-between py-3 pl-[30px] pr-[30px] z-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' fixed top-0 left-0'
  }

  return (
    <>
      <header className={headerClass}>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo className="h-6 w-auto" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl leading-6 font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target={link?.href?.includes('/static') ? '_blank' : '_self'}
                  className="m-1 font-medium text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
    </>
  )
}

export default Header
