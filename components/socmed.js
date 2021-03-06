import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube,faInstagram,faFacebook,faChrome} from '@fortawesome/free-brands-svg-icons'

function Socmed() {
    return(
        <div className="py-12 mb-4 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* <div className="lg:text-center">
                <p
                    className="text-md leading-6 text-indigo-600 font-semibold tracking-wide uppercase">School Of Huffadz</p>
                <h3
                    className="mt-2 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Ma'rifatussalaam Quranic Boarding School
                </h3>
              
            </div> */}

            <div className="mt-2">
                <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <li>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                    <FontAwesomeIcon icon={faInstagram} size="lg"/>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 tracking-wide font-medium text-gray-900">
                                    Instagram </h4>
                                <p className="mt-2 text-lg leading-6 tracking-wide font-light text-gray-500">
                                    @marifatussalaam
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <FontAwesomeIcon icon={faFacebook} size="lg"/>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 tracking-wide font-medium text-gray-900">Facebook</h4>
                                <p className="mt-2 text-lg leading-6 tracking-wide font-light text-gray-500">
                                Ma'rifatussalaam Qur'anic Boarding School
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                    <FontAwesomeIcon icon={faYoutube} size="lg"/>

                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 tracking-wide font-medium text-gray-900">Youtube</h4>
                                <p className="mt-2 text-lg leading-6 tracking-wide font-light text-gray-500">
                                marifatussalaam 
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                    <FontAwesomeIcon icon={faChrome} size="lg"/>

                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 tracking-wide font-medium text-gray-900">Website</h4>
                                <p className="mt-2 text-lg leading-6 tracking-wide font-light text-gray-500">
                                marifatussalaam.org, psb.marifatussalaam.org, marifatussalaam.sch.id
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    )
}

export default Socmed