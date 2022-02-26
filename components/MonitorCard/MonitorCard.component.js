import { PureComponent } from "react";

export class MonitorCard extends PureComponent {

    renderTitle() {
        return (
            <h1 className="text-3xl font-think mb-1 text-gray-700 capitalize dark:text-white">
                Heart Rate
            </h1>
        )
    }

    renderIcon() {
        return (
            <span className="text-blue-500 dark:text-blue-400 w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff"  d="M16,27.18a1,1,0,0,1-.71-.29L9.11,20.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0L16,24.77l8.52-8.52a5.53,5.53,0,1,0-7.81-7.82,1,1,0,0,1-1.42,0,5.53,5.53,0,0,0-9.22,5.43,1,1,0,0,1-1.92.54A7.52,7.52,0,0,1,16,6.4a7.52,7.52,0,0,1,9.94,11.26l-9.23,9.23A1,1,0,0,1,16,27.18Zm1.93-6.81L19.68,16H22a1,1,0,0,0,0-2H19a1,1,0,0,0-.93.63l-1,2.46L15,10.68a1,1,0,0,0-1.9,0L11.28,16H3a1,1,0,0,0,0,2h9a1,1,0,0,0,.95-.68L14,14.16l2.05,6.16A1,1,0,0,0,17,21h0A1,1,0,0,0,17.93,20.37Z" data-name="Heart Rate"/></svg>
            </span>
        )
    }

    renderData() {
        return (
            <span>87</span>
        )
    }

    renderUnit() {
        return (
            <span className="text-2xl text-white font-semibold ml-2 pt-5">BPM</span>
        )
    }

    render() {
        return (
            
            <div className="max-w-sm p-8 bg-blue-900 border-2 border-blue-300 rounded-xl">
                <div className="flex space-x-2 items-center justify-center">
                    {this.renderIcon()}

                    {this.renderTitle()}
                </div>

                <div className="flex items-center justify-center text-gray-300 h-32 text-7xl">
                    {this.renderData()}
                    {this.renderUnit()}
                </div>

            </div>      
            
        )
    }
}

export default MonitorCard;