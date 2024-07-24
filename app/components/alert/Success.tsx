'use client'
import React, { FC, useEffect, useState } from "react";

import { CAlert, CButton } from "@coreui/react";
import { IconCircleDashedCheck, IconSquareRoundedXFilled } from '@tabler/icons-react';

interface Props {
    title: string;
    icon: boolean;
}



export const SuccessAlert: FC<Props> = ({ title, icon }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <>
            {
                (icon === true)
                    ? <CAlert
                        className="rounded-none border-l-4 border-[#1d852c] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                        style={{
                            backgroundColor: 'rgb(79, 245, 148, 0.8)',
                            display: 'flex',
                            textAlign: 'center',
                            justifyContent: 'space-between',
                            maxWidth: '350px',
                            position: 'fixed',
                            top: '10px',
                            right: '10px',
                            zIndex: 1000,
                            borderRadius: '5px',
                            gap: '5px'
                        }}
                        color="primary" dismissible visible={visible} >
                        <CButton
                            style={{
                                color: 'rgb(3, 177, 75)',
                            }}
                            onClick={() => {
                                setVisible(false)
                            }}>
                            <IconCircleDashedCheck />
                        </CButton>
                        <p
                            style={{
                                padding: '10px',
                                color: "rgb(57, 59, 58)"
                            }}
                        >{title}
                        </p>
                        <CButton
                            style={{
                                color: 'rgb(238, 107, 107 )',
                                // backgroundColor: 'transparent',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                setVisible(false)
                            }}>
                            <IconSquareRoundedXFilled />
                        </CButton>
                    </CAlert>
                    : <CAlert
                        className="rounded-none border-l-4 border-[#c22222] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                        style={{
                            backgroundColor: 'rgb(252, 110, 110, 0.8)',
                            display: 'flex',
                            textAlign: 'center',
                            justifyContent: 'space-between',
                            width: '350px',
                            position: 'fixed',
                            top: '10px',
                            right: '10px',
                            zIndex: 1000,
                            borderRadius: '5px',
                        }}
                        color="primary" dismissible visible={visible} >
                        <CButton
                            style={{
                                color: 'rgb(3, 177, 75)',
                                marginLeft: '10px',
                            }}
                            onClick={() => {
                                setVisible(false)
                            }}>
                            <IconCircleDashedCheck />
                        </CButton>

                        <p
                            style={{
                                padding: '10px',
                                color: "rgb(57, 59, 58)"
                            }}
                        >{title}
                        </p>
                        <CButton
                            style={{
                                marginRight: '10px',
                                color: 'rgb(235, 0, 0)',
                                // backgroundColor: 'transparent',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                setVisible(false)
                            }}>
                            <IconSquareRoundedXFilled />
                        </CButton>
                    </CAlert>
            }


            {/* <CButton color="primary" onClick={() => {
                setVisible(true);
            }}>
                Show live alert
            </CButton> */}

        </>
    )


}

export default SuccessAlert;
