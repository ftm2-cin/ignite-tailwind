export function UsedSpaceWidget() {
  return (
    <div className=" flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          Used Space
        </span>
        <p className="text-sm/5  text-violet-500">
          You team has used 80% of your available space. Need More?
        </p>
      </div>

      <div className="relative pt-1">
        <div className="mb-4 flex h-2 overflow-hidden rounded bg-violet-200 text-xs">
          <div
            style={{ width: '80%' }}
            className="flex flex-col justify-center whitespace-nowrap bg-violet-500 text-center text-white shadow-none"
          ></div>
        </div>
      </div>

      <div className=" space-x-2">
        <button className="text-sm font-medium text-violet-600 hover:text-violet-800">
          Upgrade
        </button>
        <button className="text-sm font-medium text-violet-600 hover:text-violet-800">
          Learn More
        </button>
      </div>
    </div>
  )
}
