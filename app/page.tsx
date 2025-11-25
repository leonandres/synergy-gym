import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight uppercase md:text-xl">
              Synergy Gym
            </span>
            <span className="hidden rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 md:inline">
              Entrená distinto
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            <a href="#servicios" className="hover:text-neutral-900">
              Servicios
            </a>
            <a href="#planes" className="hover:text-neutral-900">
              Planes
            </a>
            <a href="#horarios" className="hover:text-neutral-900">
              Horarios
            </a>
            <a href="#equipo" className="hover:text-neutral-900">
              Equipo
            </a>
            <a href="#contacto" className="hover:text-neutral-900">
              Contacto
            </a>
          </nav>

          <a
            href="https://wa.me/5491144296173?text=Hola%20Synergy%20Gym,%20quiero%20info%20sobre%20las%20clases%20de%20prueba."
            target="_blank"
            className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 md:text-sm"
          >
            Clase de prueba
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-neutral-200 bg-gradient-to-b from-white via-white to-emerald-50/30">

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-16 lg:py-20">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-medium tracking-[0.25em] text-emerald-700">
              GIMNASIO & ENTRENAMIENTO FUNCIONAL
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-[3.2rem] leading-tight">
              Más que un gym,
              <span className="block font-semibold text-emerald-700">
                una comunidad que te acompaña.
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-neutral-700 md:text-base">
              Entrenamientos diseñados para que mejores tu rendimiento, cuides tu
              salud y te sientas parte de un equipo. Clases funcionales, musculación
              guiada y planes personalizados según tus objetivos.
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-neutral-700 md:text-base">
              Trato personalizado, entrenamientos enfocados en tus objetivos,
              profesionalismo y calidez humana.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5491144296173?text=Hola,%20quiero%20agendar%20una%20clase%20de%20prueba%20en%20Synergy%20Gym."
                target="_blank"
                className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                Reservar clase de prueba
              </a>

              <a
                href="#planes"
                className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:border-emerald-500 hover:text-emerald-700"
              >
                Ver planes y precios
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-neutral-600 md:text-sm">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
                ✔ Entrenadores presentes en sala
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
                ✔ Ambiente motivador y cercano
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
                ✔ Ubicación cómoda y de fácil acceso
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white p-5 shadow-lg shadow-emerald-100">
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                    HOY EN SYNERGY
                  </p>
                  <p className="text-base font-semibold text-neutral-900">
                    Clase Funcional • 19:00 hs
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    Circuitos de fuerza, cardio y core. Ideal para quemar calorías y
                    ganar resistencia entrenando en grupo.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm space-y-2">
                  <p className="font-semibold text-emerald-800">
                    Beneficios de entrenar con nosotros
                  </p>

                  <ul className="space-y-1 text-emerald-900">
                    <li>• Acompañamiento cercano de los profes.</li>
                    <li>• Grupos reducidos y ambiente amigable.</li>
                    <li>• Planes adaptados a tu nivel y objetivos.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
            Servicios
          </h2>

          <p className="mt-2 text-sm text-neutral-600 max-w-md">
            Distintas formas de entrenar, mismo objetivo: que mejores cada semana.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
              <h3 className="text-lg font-semibold text-neutral-900">
                Musculación guiada
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Entrená con máquinas y pesos libres, acompañado por entrenadores que
                corrigen técnica y te ayudan a progresar seguro.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
              <h3 className="text-lg font-semibold text-neutral-900">
                Entrenamiento funcional
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Clases dinámicas en grupo que combinan fuerza, cardio y movilidad.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
              <h3 className="text-lg font-semibold text-neutral-900">
                Planes personalizados
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Rutinas diseñadas para tus objetivos y tu nivel: fuerza, bajada de
                peso, postura o rendimiento deportivo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DISCIPLINAS */}
      <section className="border-b border-neutral-200 bg-gradient-to-r from-neutral-50 via-white to-emerald-50/40">

        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
            Clases y disciplinas
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Además del entrenamiento en sala, podés sumarte a disciplinas específicas.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Taekwondo */}
            <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/taekwondo-infantiles.jpg"
                  alt="Taekwondo en Synergy Gym"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-sm text-neutral-700 space-y-1">
                <p className="font-semibold text-neutral-900">Taekwondo</p>
                <p>Infantiles, juveniles y adultos.</p>
                <p>En Synergy Gym, Juan Bautista Alberdi 1865, Olivos.</p>
              </div>
            </article>

            {/* Krav Maga */}
            <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/krav-maga.jpg"
                  alt="Clase de Krav Maga en Synergy Gym"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-sm text-neutral-700 space-y-1">
                <p className="font-semibold text-neutral-900">Krav Maga</p>
                <p>Defensa personal israelí.</p>
                <p>Martes y jueves, 17:00 hs. Juan Bautista Alberdi 1865, Olivos.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MASAJES TERAPÉUTICOS */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
            Masajes terapéuticos y rehabilitación
          </h2>
          <p className="mt-2 text-sm text-neutral-600 max-w-md">
            Atención personalizada para aliviar, recuperar y mejorar tu bienestar.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Imagen */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/masajes.jpg"
                alt="Masajes terapéuticos en Synergy Gym"
                fill
                className="object-cover"
              />
            </div>

            {/* Texto */}
            <div className="text-sm text-neutral-700 space-y-3 flex flex-col justify-center">
              <p>Masajista – Kinesiólogo</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Masajes descontracturantes</li>
                <li>Rehabilitación deportiva</li>
                <li>Relajación profunda</li>
              </ul>

              <p className="text-lg font-semibold text-red-600">Precio: $30.000</p>

              <a
                href="https://wa.me/5491144296173?text=Quiero%20saber%20más%20sobre%20los%20masajes%20terapéuticos."
                target="_blank"
                className="inline-flex w-fit rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                Consultar por masajes
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* PLANES */}
      <section id="planes" className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl text-center">
            Planes y precios
          </h2>

          <p className="mt-2 text-sm text-neutral-600 text-center max-w-md mx-auto">
            Elegí el plan que mejor se adapte a tu rutina.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Plan 2 veces */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
              <h3 className="text-lg font-semibold text-neutral-900">
                Plan 2 veces por semana
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Ideal para empezar y crear el hábito.
              </p>
              <p className="mt-4 text-2xl font-semibold text-neutral-900">
                $40.000
                <span className="text-sm font-normal text-neutral-500"> / mes</span>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-neutral-600">
                <li>• Acceso a sala de musculación.</li>
                <li>• Clases funcionales (según disponibilidad).</li>
                <li>• Rutina base incluida.</li>
              </ul>
              <a
                href="https://wa.me/5491144296173?text=Quiero%20info%20sobre%20el%20plan%202%20veces%20por%20semana"
                target="_blank"
                rel="noreferrer"
                className="mt-6 rounded-full border border-neutral-300 px-4 py-2 text-center text-sm font-semibold text-neutral-800 hover:border-emerald-500 hover:text-emerald-700"
              >
                Consultar este plan
              </a>
            </div>

            {/* Plan 3 veces (destacado) */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md ring-2 ring-emerald-100">
              <p className="mb-2 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                Recomendado
              </p>
              <h3 className="text-lg font-semibold text-neutral-900">
                Plan 3 veces por semana
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Balance ideal entre progreso y descanso.
              </p>
              <p className="mt-4 text-2xl font-semibold text-neutral-900">
                $60.000
                <span className="text-sm font-normal text-neutral-500"> / mes</span>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-neutral-600">
                <li>• Acceso a musculación + funcional.</li>
                <li>• Seguimiento de profes.</li>
                <li>• Ajuste de rutina cada 4–6 semanas.</li>
              </ul>
              <a
                href="https://wa.me/5491144296173?text=Quiero%20info%20sobre%20el%20plan%203%20veces%20por%20semana"
                target="_blank"
                rel="noreferrer"
                className="mt-6 rounded-full bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                Elegir este plan
              </a>
            </div>

            {/* Plan ilimitado */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
              <h3 className="text-lg font-semibold text-neutral-900">
                Plan ilimitado
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Para quienes quieren ir a fondo.
              </p>
              <p className="mt-4 text-2xl font-semibold text-neutral-900">
                $70.000
                <span className="text-sm font-normal text-neutral-500"> / mes</span>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-neutral-600">
                <li>• Acceso libre dentro del horario del gym.</li>
                <li>• Todas las clases funcionales.</li>
                <li>• Acompañamiento cercano del equipo.</li>
              </ul>
              <a
                href="https://wa.me/5491144296173?text=Quiero%20info%20sobre%20el%20plan%20ilimitado"
                target="_blank"
                rel="noreferrer"
                className="mt-6 rounded-full border border-neutral-300 px-4 py-2 text-center text-sm font-semibold text-neutral-800 hover:border-emerald-500 hover:text-emerald-700"
              >
                Consultar este plan
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* HORARIOS */}
      <section id="horarios" className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
            Horarios
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Entrená en el horario que mejor se adapte a tu día.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 items-center">
            {/* Texto */}
            <div className="text-sm text-neutral-700 space-y-2">
              <p><strong>Lunes a viernes:</strong> 8:00 a 21:00 hs</p>
              <p><strong>Sábados:</strong> 8:00 a 20:00 hs</p>
              <p><strong>Domingos:</strong> 10:00 a 14:00 hs</p>
            </div>

            {/* Imagen horarios */}
            <div className="relative w-full max-w-md justify-self-center">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/images/horarios.jpeg"
                  alt="Horarios de atención de Synergy Gym"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* EQUIPO */}
      <section id="equipo" className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
            Nuestro equipo
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Profes que te acompañan en cada sesión.
          </p>
          {/* Agregar tarjetas con cada profe */}
        </div>
      </section>


      {/* CONTACTO */}
      <section id="contacto" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[2fr,3fr]">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
                Contacto
              </h2>

              <p className="mt-2 text-sm text-neutral-600">
                Escribinos por WhatsApp o visitanos.
              </p>

              <div className="mt-6 text-sm text-neutral-700 space-y-3">
                <p>
                  <strong>WhatsApp:</strong> +54 9 11 4429-6173
                </p>
                <p>
                  <strong>Instagram:</strong>{" "}
                  <a
                    href="https://www.instagram.com/synergygym.arg/"
                    className="text-emerald-700 underline-offset-2 hover:underline"
                    target="_blank"
                  >
                    @synergygym.arg
                  </a>
                </p>
                <p>
                  <strong>Dirección:</strong>{" "}
                  FPU Juan Bautista Alberdi 1865, Olivos, Buenos Aires B1636
                </p>
              </div>

              <a
                href="https://wa.me/5491144296173?text=Hola,%20quiero%20más%20info%20sobre%20Synergy%20Gym."
                target="_blank"
                className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
              <iframe
                title="Ubicación Synergy Gym"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3287.6162834077477!2d-58.495235!3d-34.51261100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMwJzQ1LjQiUyA1OMKwMjknNDIuOSJX!5e0!3m2!1ses!2sar!4v1763769540235!5m2!1ses!2sar"
                className="h-full w-full min-h-[260px] border-0 rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Synergy Gym. Todos los derechos reservados.</p>

          <p>
            Sitio web desarrollado por{" "}
            <span className="text-neutral-700">[Lucas Félix / Est. Ing. Informática]</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
