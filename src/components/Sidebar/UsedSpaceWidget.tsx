export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-primary-50 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-primary-700 dark:text-zinc-100">
          Used Space
        </span>
        <p className="text-sm/5 text-primary-500 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-primary-100 dark:bg-zinc-600">
        <div className="h-2 w-4/5 rounded-full bg-primary-600 dark:bg-primary-400" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-primary-700 hover:text-primary-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
