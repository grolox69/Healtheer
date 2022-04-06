import { PureComponent } from 'react'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'

export class AddPatient extends PureComponent {

    renderPlusIcon() {
        return <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />
    }

    renderAddButton() {
        const { openModal } = this.props;
        
        return (
            <button
                className="fixed float-right bottom-10 right-14 items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-[#643A6A] hover:bg-[#9a3aa7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={openModal}
            >   
                {this.renderPlusIcon()}    
            </button>
        )
    }

    render() {
        return (
            this.renderAddButton()
        )
    }
}

export default AddPatient
