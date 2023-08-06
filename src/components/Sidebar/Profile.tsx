import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/gabrieldesiderio.png"
        alt=""
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Gabriel Desidério
        </span>
        <span className="truncate text-sm text-zinc-500">
          gabrieldesd7@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
