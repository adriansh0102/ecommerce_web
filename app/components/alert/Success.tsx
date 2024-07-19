'use client'
import React, { useState } from "react";

import { CAlert, CButton } from "@coreui/react";
import { IconCircleDashedCheck, IconSquareRoundedXFilled } from '@tabler/icons-react';






export default function SuccessAlert() {
    const [visible, setVisible] = useState(false)

    setTimeout(() => {
        setVisible(false)
    }, 3000);

    return (
        <>
            <CAlert
                className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                style={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    width: '350px',
                    position: 'fixed',
                    top: '10px',
                    right: '10px',
                    zIndex: 1000,
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
                    }}
                >Product asfawsdgearsdgdf dfhdf sdfdfd hsd hfdsh ds htedCreate
                </p>
                <CButton
                    style={{
                        marginRight: '10px',
                        color: 'rgb(238, 107, 107)',
                        backgroundColor: 'transparent',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        setVisible(false)
                    }}>
                    <IconSquareRoundedXFilled />
                </CButton>
            </CAlert>



            <CButton color="primary" onClick={() => {
                setVisible(true)
            }}>
                Show live alert
            </CButton>

        </>
    )


}
