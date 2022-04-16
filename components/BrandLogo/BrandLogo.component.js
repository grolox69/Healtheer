import { PureComponent } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png';

export class BrandLogo extends PureComponent {
    render() {
        return (
            <div className="flex-shrink-0 flex items-center px-4">
                <Image
                    className="h-8 w-auto"
                    src={Logo}
                    alt="Healtheer Logo"
                    width='200'
                    height='100'
                    quality='100'
                    placeholder='blur'
                />
            </div>
        )
    }
}

export default BrandLogo;