import { PureComponent } from "react";

export class MonitorCard extends PureComponent {

    renderTitle() {
        const { sensor: { title } } = this.props;

        return (
            <h1 className="text-3xl mb-1 text-gray-700 capitalize">
               { title }
            </h1>
        )
    }

    renderIcon() {
        const { sensor: { icon } } = this.props;
        
        return (
            icon.content
        )
    }

    renderData() {
        const { data, sensor: { id } } = this.props;
        const size = typeof data === 'string' ? 'text-lg' : 'text-2xl'
        const dataToDisplay = typeof data === 'string' ? data : data[id]
        
        return (
            <span 
                className={`text-red-500 ${size} font-bold`}
            >
                { dataToDisplay }
            </span>
        )
    }

    renderUnit() {
        const { sensor: { unit } } = this.props;

        return (
            <span className="text-2xl text-black font-semibold pl-3">
                { unit }
            </span>
        )
    }

    render() {
        return (
            
            <div className="max-w-sm p-8 border-2 border-blue-300 rounded-xl">
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