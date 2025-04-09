export default function Tech() {
  return (
    <div className="mb-8 overflow-hidden rounded-2xl bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Technologies
          </h2>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
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
              <dd className="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
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
          <div className="inline-block h-52 rounded-lg bg-pink-500" />
          <div className="inline-block h-52 rounded-lg bg-pink-500" />
          <div className="inline-block h-52 rounded-lg bg-pink-500" />
          <div className="inline-block h-52 rounded-lg bg-pink-500" />
        </div>
      </div>
    </div>
  )
}
