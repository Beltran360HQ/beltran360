export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

        <span className="mb-6 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium">
          BELTRAN360
        </span>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight">
          Sistema Operativo para
          <br />
          Contadores
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-600">
          Plataforma profesional que reúne herramientas, biblioteca,
          recursos, calendario tributario y un ERP diseñado para quienes
          toman las decisiones contables.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white">
            Explorar Plataforma
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold">
            Conocer el ERP
          </button>

        </div>

      </section>
    </main>
  );
}
