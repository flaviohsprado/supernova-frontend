import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

export interface IStyledModalProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export default function StyledModal({ title, children, isOpen, onOpen, onClose }: IStyledModalProps) {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent bgColor={'#252525'}>
                    <ModalHeader color={'white'}>{title}</ModalHeader>
                    <ModalCloseButton bgColor={'white'} _hover={{
                        bg: '#828181'
                    }} />
                    <ModalBody pb={6}>
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}