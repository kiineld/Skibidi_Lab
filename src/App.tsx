import PageRouter from "@/pageRouter.tsx";
import {Header} from "@/components/shared";


function App() {
    return (
        <div className="min-h-screen">
            <Header/>
            <div className="max-w-screen-xl w-[85vw] min-h-screen mx-auto ring-8">
                <PageRouter/>
            </div>
        </div>
    )
}

export default App
