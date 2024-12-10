/** @format */

"use client";
import Button from "@/components/common/Button";
import Section from "@/components/common/Section";
import { useUser } from "@/context/UserContext";
import { formatDateTimeToFrench } from "@/helper/funct";
import {
    addParticipantToProgram,
    getParticipantByProgramId,
    getProgramBySlug,
} from "@/lib/api/program";
import { isRegisteredProgram } from "@/utils/fn/helper";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { toast } from "react-toastify";

const DetailProgram: FC<{ slug: string; isLogged: boolean }> = ({
    slug,
    isLogged = false,
}) => {
    const [idProgram, setIdProgram] = useState(1);

    const router = useRouter();

    const { data, isLoading } = useQuery({
        queryKey: ["program", slug],
        queryFn: () => getProgramBySlug(slug),
    });

    const { user } = useUser();

    const {
        mutateAsync: addParticipant,
        isPending,
        data: responseData,
    } = useMutation({
        mutationFn: addParticipantToProgram,
    });

    const { data: participants, isLoading: loadingParticipants } = useQuery({
        queryKey: ["participant"],
        queryFn: () => getParticipantByProgramId(idProgram),
    });

    const handleAddParticipant = async () => {
        if (isLogged) {
            try {
                const response = await addParticipant({
                    programId: data?.data.id!,
                    userId: user?.id!,
                });
                if (response?.status === "success") {
                    toast.success("Ajouter au programme avess Success");
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            router.push("/signin");
        }
    };

    useEffect(() => {
        if (!isLoading && data?.data) {
            setIdProgram(data.data.id);
        }
    }, [isLoading, data]);

    useEffect(() => {
        if (responseData?.error_message) {
            toast.error(responseData.error_message);
        }
    }, [responseData]);

    return (
        <Section id='program-detail'>
            {isLoading ? (
                <div className='flex justify-center min-h-[50svh] items-center w-full'>
                    <span className='loading loading-spinner loading-lg'></span>
                </div>
            ) : (
                <div className='flex flex-col gap-6 md:gap-8 my-8'>
                    <div className='w-full md:h-[50svh] min-h-auto border'>
                        <Image
                            className='w-full md:h-full h-auto object-cover rounded-xl'
                            src={data?.data.thumbnail!}
                            alt={data?.data.title!}
                            width={400}
                            height={500}
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6'>
                        <div className='col-span-1 md:col-span-4 flex flex-col gap-6'>
                            <h1 className='text-2xl md:text-3xl font-extrabold '>
                                {data?.data.title}
                            </h1>
                            <p>{data?.data.description}</p>
                            <div className='md:my-8 my-0'></div>
                        </div>
                        <div className='col-span-1 md:col-span-2 md:py-8 py-0'>
                            <div className='border border-gray-300 shadow-lg rounded-xl p-4 flex flex-col gap-4'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex flex-row items-center gap-1'>
                                        <IoCalendarNumberOutline
                                            className='text-blue-400'
                                            size={20}
                                        />
                                        <span className='text-sm font-semibold'>
                                            Date & heure
                                        </span>
                                    </div>
                                    <div>
                                        <p className='text-sm font-medium'>
                                            {formatDateTimeToFrench(
                                                data?.data.date_from!
                                            )}
                                            <span className='text-base font-medium'>
                                                {" "}
                                                ( GMT+2 )
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <MdPlace
                                            className='text-blue-400'
                                            size={20}
                                        />
                                        <span className='text-sm font-semibold'>
                                            Locatisation
                                        </span>
                                    </div>
                                    <div>
                                        <p className='text-sm font-medium'>
                                            {data?.data.location}
                                        </p>
                                    </div>
                                </div>
                                {loadingParticipants ? (
                                    <span className='loading loading-spinner loading-sm'></span>
                                ) : (
                                    <div>
                                        {!isRegisteredProgram(
                                            user?.id!,
                                            participants?.data!
                                        ) ? (
                                            <Button
                                                isLoading={isPending}
                                                text="S'enregister"
                                                handClick={handleAddParticipant}
                                            />
                                        ) : (
                                            <p className='text-sm font-semibold italic text-customHoverBlue'>
                                                Vous etez enregistrer
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
};

export default DetailProgram;
