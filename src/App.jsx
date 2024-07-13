import NavBar from "./navigation/NavBar";
import Hero from "./pages/Hero";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app">
      <NavBar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-full md:h-full bg-light-grey">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <div className="w-5/6 mx-auto">
          <Hero setSelectedPage={setSelectedPage} />
        </div>
      </div>

      <div className="w-5/6 mx-auto">
          {/** ABOUT PAGE */}
      </div>

      <div className="w-full bg-light-grey">
        <div className="w-5/6 mx-auto">
          {/** CODING PROJECTS PAGE */}
        </div>
      </div>

      <div className="w-5/6 mx-auto">
          {/** CREATIVE PROJECTS PAGE */}
      </div>

      <div className="w-full bg-light-grey">
        <div className="w-5/6 mx-auto">
          {/** CONTACT PAGE */}
        </div>
      </div>

    </div>
  )
}

export default App
