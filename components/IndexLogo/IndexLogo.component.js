import { PureComponent } from 'react';
import Image from 'next/image';

export class IndexLogo extends PureComponent {
    render() {
        return (
            <div className="flex sm:mx-auto sm:w-full sm:max-w-md justify-center">
                <Image
                    className="mx-auto h-12 w-auto"
                    src="/healtheer.png"
                    alt="Workflow"
                    height='175'
                    width='200'
                />
            </div>
        )
    }
}

export default IndexLogo;