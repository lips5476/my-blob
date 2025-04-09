import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import LocationIcon from '@/data/locationIcon.svg'
export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="relative space-y-2 pt-6 pb-8 md:space-y-5">
          <Image
            src={'/static/images/avatar.jpg'}
            alt="avatar"
            quality={100}
            width={80}
            height={80}
            className="rounded-[10px]"
          />
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {siteMetadata.author}
          </h1>
          <p className="row align-center flex text-lg leading-7 text-gray-500 dark:text-gray-400">
            <LocationIcon className="h-5 w-5" />
            <span className="leading-6">{siteMetadata.location}</span>
          </p>
          <p className="text-3xl leading-7 text-black dark:text-gray-400">
            {siteMetadata.identity}
          </p>
        </div>

        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Technical Specifications
              </h2>
              <p className="mt-4 text-gray-500">
                The walnut wood card tray is precision milled to perfectly fit a stack of Focus
                cards. The powder coated steel divider separates active cards from new ones, or can
                be used to archive important task lists.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Origin</dt>
                  <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Material</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Solid walnut base with rare earth magnets and powder coated steel card cover
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Dimensions</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    6.25&quot; x 3.55&quot; x 1.15&quot;
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Finish</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Hand sanded and finished with natural oil
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Includes</dt>
                  <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Considerations</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Made from natural materials. Grain and color vary with each item.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-02.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {new Array(10).fill(0).map((it, idx) => {
                return (
                  <div className="group relative" key={idx}>
                    <img
                      src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="https://www.baidu.com">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            Basic Tee
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
                <div className="group relative">
                  <img
                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg"
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="https://www.baidu.com">
                      <span className="absolute inset-0"></span>
                      Desk and Office
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Work from home accessories
                  </p>
                </div>
                <div className="group relative">
                  <img
                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg"
                    alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="https://www.baidu.com">
                      <span className="absolute inset-0"></span>
                      Self-Improvement
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
                </div>
                <div className="group relative">
                  <img
                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="https://www.baidu.com">
                      <span className="absolute inset-0"></span>
                      Travel
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
