"use client";
import React from "react";
import Image from "next/image";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Buttons } from "../UIElements";

SwiperCore.use([Pagination, Navigation]);

export default function Pricing() {
	return (
		<section lassName="py-mobile md:pb-0 lg:pt-desktop" id="pricing">
			<div className="container">
				<h2 className="mb-[48px] text-4xl lg:text-5xl font-bold sm:text-center md:text-left">
					Our Pricing
				</h2>

				<div className="sm:block md:hidden lg:hidden">
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						navigation={true}
						pagination={{ clickable: true }}
					>
						<SwiperSlide>
							<div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
								<h3 className="mt-[8px] mb-[12px] text-lg font-bold">
									FBA, FBW, Private Label
								</h3>
								<p className="text-base font-bold">
									Deposit $69
								</p>
								<p className="text-base font-bold mb-[16px]">
									From 250 units/month
								</p>
								<p className="text-base mb-[16px]">
									*Base price in USD
								</p>
								<ul className="mb-[16px] flex justify-between">
									<li>
										<p className="text-base font-bold">
											Single:
										</p>
										<p>$0,75</p>
									</li>
									<li className="">
										<p className="text-base font-bold">
											Set/Bundle:
										</p>
										<p>$0,90</p>
									</li>
								</ul>

								<Buttons>Get a Quote</Buttons>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
								<h3 className="mt-[8px] mb-[12px] text-lg font-bold text-mainBlack">
									Online arbitration
								</h3>
								<p className="text-base font-bold text-mainBlack">
									Deposit $69
								</p>
								<p className="text-base font-bold text-mainBlack mb-[16px]">
									From 300 units/month
								</p>
								<p className="text-base text-mainBlack mb-[16px]">
									*Base price in USD
								</p>
								<ul className="mb-[16px] flex justify-between text-mainBlack">
									<li>
										<p className="text-base font-bold">
											Single:
										</p>
										<p>$0,85</p>
									</li>
									<li className="">
										<p className="text-base font-bold">
											Set/Bundle:
										</p>
										<p>$1,00</p>
									</li>
								</ul>

								<Buttons>Get a Quote</Buttons>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
								<h3 className="mt-[8px] mb-[12px] text-lg font-bold">
									Wholesale
								</h3>
								<p className="text-base font-bold">
									Deposit $69
								</p>
								<p className="text-base font-bold mb-[16px]">
									From 1000 units/month
								</p>
								<p className="text-base mb-[16px]">
									*Base price in USD
								</p>
								<ul className="mb-[16px] flex justify-between">
									<li>
										<p className="text-base font-bold">
											Single:
										</p>
										<p>$0,60</p>
									</li>
									<li className="">
										<p className="text-base font-bold">
											Set/Bundle:
										</p>
										<p>$0,75</p>
									</li>
								</ul>

								<Buttons>Get a Quote</Buttons>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
								<h3 className="mt-[8px] mb-[12px] text-lg font-bold text-mainBlack">
									FBM
								</h3>
								<p className="text-base font-bold text-mainBlack">
									Deposit $69
								</p>
								<p className="text-base font-bold text-mainBlack mb-[16px]">
									From 20 units/month
								</p>
								<p className="text-base text-mainBlack mb-[16px]">
									*Base price in USD
								</p>
								<ul className="mb-[16px] flex justify-between text-mainBlack">
									<li>
										<p className="text-base font-bold">
											Single:
										</p>
										<p>$2,00</p>
									</li>
									<li className="">
										<p className="text-base font-bold">
											Set/Bundle:
										</p>
										<p>$3,00</p>
									</li>
								</ul>

								<Buttons>Get a Quote</Buttons>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<ul className="hidden sm:hidden md:flex lg:flex flex-wrap">
					<li className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
						<h3 className="mt-[8px] mb-[12px] text-lg font-bold">
							FBA, FBW, Private Label
						</h3>
						<p className="text-base font-bold">Deposit $69</p>
						<p className="text-base font-bold mb-[16px]">
							From 250 units/month
						</p>
						<p className="text-base mb-[16px]">
							*Base price in USD
						</p>
						<ul className="mb-[16px] flex justify-between">
							<li>
								<p className="text-base font-bold">Single:</p>
								<p>$0,75</p>
							</li>
							<li className="">
								<p className="text-base font-bold">
									Set/Bundle:
								</p>
								<p>$0,90</p>
							</li>
						</ul>

						<Buttons>Get a Quote</Buttons>
					</li>
					<li className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
						<h3 className="mt-[8px] mb-[12px] text-lg font-bold text-mainBlack">
							Online arbitration
						</h3>
						<p className="text-base font-bold text-mainBlack">
							Deposit $69
						</p>
						<p className="text-base font-bold text-mainBlack mb-[16px]">
							From 300 units/month
						</p>
						<p className="text-base text-mainBlack mb-[16px]">
							*Base price in USD
						</p>
						<ul className="mb-[16px] flex justify-between text-mainBlack">
							<li>
								<p className="text-base font-bold">Single:</p>
								<p>$0,85</p>
							</li>
							<li className="">
								<p className="text-base font-bold">
									Set/Bundle:
								</p>
								<p>$1,00</p>
							</li>
						</ul>

						<Buttons>Get a Quote</Buttons>
					</li>
					<li className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-darkBlue text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
						<h3 className="mt-[8px] mb-[12px] text-lg font-bold">
							Wholesale
						</h3>
						<p className="text-base font-bold">Deposit $69</p>
						<p className="text-base font-bold mb-[16px]">
							From 1000 units/month
						</p>
						<p className="text-base mb-[16px]">
							*Base price in USD
						</p>
						<ul className="mb-[16px] flex justify-between">
							<li>
								<p className="text-base font-bold">Single:</p>
								<p>$0,60</p>
							</li>
							<li className="">
								<p className="text-base font-bold">
									Set/Bundle:
								</p>
								<p>$0,75</p>
							</li>
						</ul>

						<Buttons>Get a Quote</Buttons>
					</li>
					<li className="w-full h-[316px] sm:w-full md:w-[282px] lg:w-[282px] mb-4 sm:mb-4 md:mb-0 py-4 pl-4 pr-9 rounded-lg bg-captionalWhite text-captionalWhite overflow-x-auto md:mr-[20px] lg:mb-0 lg:mr-[24px]">
						<h3 className="mt-[8px] mb-[12px] text-lg font-bold text-mainBlack">
							FBM
						</h3>
						<p className="text-base font-bold text-mainBlack">
							Deposit $69
						</p>
						<p className="text-base font-bold text-mainBlack mb-[16px]">
							From 20 units/month
						</p>
						<p className="text-base text-mainBlack mb-[16px]">
							*Base price in USD
						</p>
						<ul className="mb-[16px] flex justify-between text-mainBlack">
							<li>
								<p className="text-base font-bold">Single:</p>
								<p>$2,00</p>
							</li>
							<li className="">
								<p className="text-base font-bold">
									Set/Bundle:
								</p>
								<p>$3,00</p>
							</li>
						</ul>

						<Buttons>Get a Quote</Buttons>
					</li>
				</ul>
			</div>
		</section>
	);
}
