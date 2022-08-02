export const SearchBar = () => {
	return (
		<div className="w-screen max-w-xs">
			<form className="flex items-center mt-5 h-12 gap-x-2">
				<input
					type="text"
					className="h-full  px-2 bg-zinc-700 border border-zinc-400 outline-none rounded-lg w-full"
				/>
				<button
					type="submit"
					className="h-full bg-zinc-600 border border-zinc-400 hover:bg-zinc-500 px-4 rounded-lg"
				>
					🔍
				</button>
			</form>
		</div>
	)
}
