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
                style={{
                    width: '350px',
                    height: 'auto',
                    position: 'fixed',
                    top: '10px',
                    right: '10px',
                    zIndex: 1000,
                    backgroundColor: 'rgb(3, 177, 75 , 0.5)',
                    padding: '12px',
                    borderRadius: '5px',
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.6s ',
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

                <p>A simple primary alaesjg fdhjkl etyu';lkjhgfdsa ert—check it out!</p>
                <CButton
                    style={{
                        marginLeft: 'auto',
                        marginRight: '0px',
                        padding: '0 5px',
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
