import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutProject from "@/pages/about_project/aboutProject.tsx";
import Authorization from "@/pages/authorization/authorization.tsx";
import NotFound from "@/pages/notFound/notFound.tsx";



const PageRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AboutProject/>}/>
                <Route path="/authorization" element={<Authorization/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default PageRouter