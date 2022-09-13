import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
    const ref=React.createRef();
    const styleTextNav="font-eudoxusMedium text-sm sm:text-base md:text-lg cursor-pointer text-black hover:text-green px-3 py-2"
	
	return (
		<div>
			<nav className="w-full fixed bg-white px-7 sm:px-16 xl:px-32 2xl:px-52 border-t-transparent border-l-transparent border-r-transparent border-2 border-[#F3F3F3] z-30">
				<div className="w-full xl:container xl:mx-auto">
					<div className="w-full flex items-center h-16 xl:h-20">
						<div className="w-full flex items-center justify-between">
							<div className="flex justify-center items-center">
								<Link href="/">
									<img
										loading="lazy"
										src="/images/Home-page/Frame 1.svg"
										className="w-[99px] md:w-[120px] lg:w-[130px] cursor-pointer"
									/>
								</Link>
							</div>
							<div className="hidden lg:block">
								<div className="flex space-x-2 lg:space-x-6 2xl:space-x-11">
									<Link href="/Products">
                                        <a
										className={styleTextNav}
                                        >
                                        Product
                                        </a>
									</Link>
									<Link href="/Services">
                                        <a
										className={styleTextNav}
                                        >
                                        Services
                                        </a>
									</Link>
									<Link href="/Article">
                                        <a
										className={styleTextNav}
                                        >
                                        Article
                                        </a>
									</Link>
									<Link href="/About">
                                        <a
										className={styleTextNav}
                                        >
                                        About Us
                                        </a>
									</Link>
								</div>
							</div>
							<div className="flex justify-center items-center space-x-5">
								<Link href="#!">
									<img
										src="/images/Home-page/bag-2.svg"
										className="hidden lg:block w-[30px] cursor-pointer"
									/>
								</Link>
								<Link href="#!">
									<img
										src="/images/Home-page/user.svg"
										className="hidden lg:block w-[30px] cursor-pointer"
									/>
								</Link>
							</div>
						</div>
						<div className="flex lg:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-white inline-flex items-center justify-center rounded-md text-black"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-[25px] w-[25px]"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-[25px] w-[25px]"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
						<div className="lg:hidden" id="mobile-menu">
							<div className="grid grid-cols-4">
								<div className="col-end-5 col-span-1">
									<div
										ref={ref}
										className="grid pt-2 pb-3 space-y-5 text-right font-eudoxusMedium text-sm sm:text-base md:text-lg cursor-pointer text-black hover:text-green py-2"
									>
										<Link
											href="/Products"
										>
											<a>
												Product
											</a>
										</Link>
										<Link
											href="/Services"
										>
											<a>
												Services
											</a>
										</Link>
										<Link
											href="/Article"
										>
											<a>
												Article
											</a>
										</Link>
										<Link
											href="/"
										>
											<a>
												About Us
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
				</Transition>
			</nav>
		</div>
	);
}

export { Navbar };