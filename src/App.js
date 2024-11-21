import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import { contactAction } from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Careers, { careersLoader } from './pages/careers/Careers'

import {questionsLoader} from './pages/help/Faq'
// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails"
import CareersError from './pages/careers/CareersError'

import Thanks from './pages/help/Thanks'
import { brainstorm_action, brainstorm_loader } from './pages/Home'
import { deleteIdea } from './pages/Listed'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} action={brainstorm_action} loader={brainstorm_loader}/>
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} loader={questionsLoader}/>
        <Route path="contact" element={<Contact/>} action={contactAction}/>
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader} 
        />
        <Route 
          path=":id" 
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="delete" action={deleteIdea}/>
      <Route path="thanks" element={<Thanks />} />


      <Route path="*" element={<NotFound />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
