import { PureComponent } from 'react';
import Image from 'next/image';

export class BrandLogo extends PureComponent {
    render() {
        return (
            <div className="flex-shrink-0 flex items-center px-4">
                <Image
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="healtheer logo"
                    width='200'
                    height='100'
                    quality='100'
                />
            </div>
        )
    }
}

export default BrandLogo;