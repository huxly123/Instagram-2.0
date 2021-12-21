import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from "../atoms/modalAtom";
import {Dialog,Transition}
 from '@headlessui/react'
import { Fragment } from 'react';
function Modal() {

    const [open, setOpen] = useRecoilState(modalState)
    


    return (
        <Transition.Root show={open} as={Fragment} >
            <Dialog as='div' className='fixed z-10 insert-0 ' >

            </Dialog>
       </Transition.Root>
    )
}

export default Modal
