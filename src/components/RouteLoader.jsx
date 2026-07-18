export default function RouteLoader() {
  return (
    <div className="grid min-h-[65vh] place-items-center bg-ivory px-4 pt-24" role="status" aria-live="polite">
      <div className="w-full max-w-56">
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-stone">
          Les Pierres de Hamza
        </p>
        <div className="route-loader-line" aria-hidden="true" />
      </div>
    </div>
  )
}
