function App() {
  return (
      <div className="relative text-right bg-indigo-300">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://sm.ign.com/t/ign_in/review/s/sweet-toot/sweet-tooth-season-1-review_ny46.1280.jpg"
            alt="img"
          />
          <div className="absolute inset-0 text-right bg-red-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl pr-5 font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Tailwind CSS with React</h1>
          <p className="mt-6 text-xl text-justify pl-60 ml-80 text-indigo-100 max-w-3xl">
          Tailwind is a utility-first CSS library that exposes CSS properties applied as classes directly to your markup. Before it existed, I used another very popular CSS UI library. It promised beautiful designs with minimal effort. I felt so productive at first throwing buttons, cards, and accordions down as fast as cut and paste. With just a few classes an ugly button turned into a beautiful button.
          </p>
        </div>
      </div>
  )
}

export default App;
