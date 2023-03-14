import { Routes, Route } from "react-router-dom"
import { PathName } from "../res/enums"
import { HomeView, ProfileView, RecommendatoinsView, CatalogView, SavedView, Applications, LearningPlatformView } from "../views"

export const MainRoute = () => {
    return (
        <Routes>
            <Route path={PathName.Dashboard} element={<HomeView />} />
            <Route path={PathName.Profile} element={<ProfileView />} />
            <Route path={PathName.Recommendations} element={<RecommendatoinsView />} />
            <Route path={PathName.Catalog} element={<CatalogView />} />
            <Route path={PathName.Saved} element={<SavedView />} />
            <Route path={PathName.Applications} element={<Applications />} />
            <Route path={PathName.LearningPlatform} element={<LearningPlatformView />} />
          </Routes>
    )
}