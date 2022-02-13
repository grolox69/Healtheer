import { PureComponent } from 'react';
import IndexLogo from '../components/IndexLogo';
import SigninForm from '../components/SigninForm';
import Link from 'next/link';

export class Index extends PureComponent {
  render() {
    return (
      <>
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-[#643A6A] via-[#F78F64] to-[#F9F871]">
          <IndexLogo />
          <SigninForm />
          <Link href="/dashboard">
            <a>
                Secret sign in
            </a>
          </Link>
        </div>
      </>
    )
  }
}

export default Index;
