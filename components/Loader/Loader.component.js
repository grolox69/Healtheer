import { PureComponent } from "react";

export class Loader extends PureComponent {
    render() {
        return (
            <div className="h-screen grid place-content-center justify-center bg-gray-100">
                <div>
                    <h1 className="text-5xl font-thin text-[#643A6A]">Healtheer</h1>
                </div>
                <div className="flex justify-center my-10 space-x-2">
                    <div className="animate-ping h-4 w-1 bg-[#643A6A] rounded-full" style={{'animationDelay': '0.4s'}}></div>
                    <div className="animate-ping h-4 w-1 bg-[#643A6A] rounded-full" style={{'animationDelay': '0.2s'}}></div>
                    <div className="animate-ping h-4 w-1 bg-[#643A6A] rounded-full"></div>
                    <div className="animate-ping h-4 w-1 bg-[#643A6A] rounded-full" style={{'animationDelay': '0.2s'}}></div>
                    <div className="animate-ping h-4 w-1 bg-[#643A6A] rounded-full" style={{'animationDelay': '0.4s'}}></div>
                </div>
            </div>
        )
    }
}

export default Loader