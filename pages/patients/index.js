import { PureComponent } from 'react'
import PatientsPage from '../../route/PatientsPage'

import baseUrl from '../../util/baseUrl'

export class Patients extends PureComponent {

  render() {

    return <PatientsPage />
  }
}

// export async function getServerSideProps(context) {
//   const response = await fetch(`${baseUrl}/api/patients`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       cookie: context.req.headers.cookie,
//     },
//   })
  
//   const data = await response.json()
  
//   return { props: { data } }
// }


export default Patients;